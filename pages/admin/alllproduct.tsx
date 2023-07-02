import React from "react";
import { Box } from "../../components/admin/Allproduct/Box";
type Props = {};
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import axios from "axios";
import newRequest from "../../utils/API";
import productService from "../../services/productService";
import Link from "next/link";

interface DataType {
  name: string;
  productid: number;
  minted: number;
  maxmint: number;
  Type: string;
  _id: string;
  series: string;
  USD: number;
}

function Allproduct({}: Props) {
  const [products, setProducts] = useState<DataType[]>([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const allproduct = await productService.getallproduct(page);

      const newProducts = allproduct.data.product;
      if (page == 1) {
        setProducts(newProducts);
      
      } else {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (productId: number) => {
    try {
      const remove = await productService.removeProduct(productId);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const pagination = {
    pageSize: 10, // Number of items per page
    total: products.length, // Total number of items
    onChange: (newPage: any) => addNewdata(newPage), // Update current page on page change
  };

  useEffect(()=>{
    if (page == Math.ceil(products.length / 10)) {
      fetchProducts();
    }
  },[page])

  const addNewdata = async (page: any) => {
    setPage(page);

  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Product ID",
      dataIndex: "_id",
      key: "Id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "ID",
      dataIndex: "productid",
      key: "productid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "USD",
      key: "USD",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Minted",
      dataIndex: "minted",
      key: "minted",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handleRemove(record.productid)}>Remove</button>
          <Link href={`/admin/updateprod?id=${record._id}`}>Edit</Link>
        </Space>
      ),
    },
  ];

  return (
    <div className="w-full adminpanelcomponent">
      <h1 className="uppercase font-bold p-5 text-center text-black">
        all product
      </h1>
      <Table
        className="p-5"
        columns={columns}
        dataSource={products}
        pagination={pagination}
      />
    </div>
  );
}

export default Allproduct;
