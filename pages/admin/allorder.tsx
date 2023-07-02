import React from "react";
import { Box } from "../../components/admin/Allproduct/Box";
type Props = {};
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import axios from "axios";
import newRequest from "../../utils/API";
import orderlistervice from "../../services/productService";
import Link from "next/link";

interface DataType {
  users: {};
  product: {};
  tx: string;
  paidAt: any;
  amount: number;
  totalprice: number;
  paymentToken: string;
}

function Allorder({}: Props) {
  const [orderlist, setorderlist] = useState<DataType[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchorderlist();
  }, []);

  const fetchorderlist = async () => {
    try {
      const allorder = await orderlistervice.getorderALL(page);

      const neworderlist = allorder.data.order;
      if (page == 1) {
        setorderlist(neworderlist);
      } else {
        setorderlist((prevorderlist) => [...prevorderlist, ...neworderlist]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (productId: number) => {
    try {
      const remove = await orderlistervice.removeProduct(productId);
      fetchorderlist();
    } catch (error) {
      console.log(error);
    }
  };

  const pagination = {
    pageSize: 10, // Number of items per page
    total: orderlist.length, // Total number of items
    onChange: (newPage: any) => addNewdata(newPage), // Update current page on page change
  };

  useEffect(() => {
    if (page == Math.ceil(orderlist.length / 10)) {
      fetchorderlist();
    }
  }, [page]);

  const addNewdata = async (page: any) => {
    setPage(page);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Order ID",
      dataIndex: "_id",
      key: "Id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Product ID",
      dataIndex: "product",
      key: "Id",
      render: (_, record: any) => (
        <Space size="middle">
          {record.product ? record.product.productid :"Product removed"}
     {  record.producd &&   <Link href={`/buy?id=${record.product?._id}`}>View</Link>}
        </Space>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Totalprice",
      dataIndex: "totalprice",
      key: "totalprice",
      render: (text) => <a>{text}</a>,
    },
  ];

  return (
    <div className="w-full adminpanelcomponent">
      <h1 className="uppercase font-bold p-5 text-center text-black">
        all order
      </h1>
      <Table
        className="p-5"
        columns={columns}
        dataSource={orderlist}
        pagination={pagination}
      />
    </div>
  );
}

export default Allorder;
