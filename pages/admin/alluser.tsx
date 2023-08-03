import React, { use } from "react";
import { Box } from "../../components/admin/Allproduct/Box";
type Props = {};
import { Space, Table, Tag, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import axios from "axios";
import newRequest from "../../utils/API";
import productService from "../../services/productService";
import Link from "next/link";
import userService from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
import { useAccount } from "wagmi";
interface DataType {
  wallet: string;
  role: string;
}

const suffix = (
  <div
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

function Alluser({}: Props) {
  const {address}  = useAccount()
  const [users, setusers] = useState<DataType[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const allusers = await userService.getAlluser(page);

      const newUsers = allusers.data.users;
      if (page == 1) {
        setusers(newUsers);
      } else {
        setusers((prevProducts) => [...prevProducts, ...newUsers]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Getsingleuser = async (wallet: string) => {
    const siggleusercall = await userService.getsingleuser(wallet);
    const user = siggleusercall.data.user;
    setusers([user]);
  };

  //get only one user
  const onSearch = async (e: any) => {
    const Wadress = e;
    if (Wadress) {
      await Getsingleuser(Wadress);
    }
  };

  const handleRemove = async (productId: number) => {
    try {
      const remove = await productService.removeProduct(productId);
      toast.success("Remove done!");
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  //add admin
  const Addadmin = async (e:any,isadmin:boolean) => {
   if(address == e.wallet) return;
    const data = {
      wallet: e.wallet,
      role:isadmin?"admin":"user"
    };
    try {
      const add = await userService.addadmin(data);
      toast.success("Admin updated!");
      fetchUser();
    } catch (error) {
      console.log(error);
    }
  };

  const pagination = {
    pageSize: 10, // Number of items per page
    total: users.length, // Total number of items
    onChange: (newPage: any) => addNewdata(newPage), // Update current page on page change
  };

  useEffect(() => {
    if (page == Math.ceil(users.length / 10)) {
      fetchUser();
    }
  }, [page]);

  const addNewdata = async (page: any) => {
    setPage(page);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Wallet",
      dataIndex: "wallet",
      key: "wallet",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        
        <Space size="middle">
          <button onClick={() => Addadmin(record,true)}>Add admin</button>
          <button onClick={() => Addadmin(record,false)}>remove admin</button>
        </Space>
      ),
    },
  ];

  const { Search } = Input;

  return (
    <div className="w-full adminpanelcomponent">
      <h1 className="uppercase font-bold p-5 text-center text-black">
        All User
      </h1>
      <div className="p-5">
        <Search
          placeholder="Wallet"
          style={{
            width: 400,
          }}
          onSearch={onSearch}
          suffix={suffix}
        />
      </div>
      <Table
        className="p-5"
        columns={columns}
        dataSource={users}
        pagination={pagination}
      />
    </div>
  );
}

export default Alluser;
