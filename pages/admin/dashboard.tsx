import React, { useEffect, useState } from "react";
import { Box } from "../../components/admin/dashboard/Box";
import productService from "../../services/productService";
type Props = {};
interface state{
  product:number,
  order:number,
  user:number
}

function dashboard({}: Props) {
  const [data, setdata] = useState<state>();

  useEffect(() => {
    const fetchdata = async () => {
      const state = await productService.getalldatacount();
      setdata(state.data.data);
    };

    fetchdata();
  }, []);

  return (
    <div className="w-full">
      <h1 className="uppercase font-bold p-10">dashboard</h1>

      <div className="flex flex-wrap justify-center gap-5">
      <Box title="User" count={data?.user} />
        <Box title="Product" count={data?.product} />
        <Box title="Order" count={data?.order} />
    
      </div>
    </div>
  );
}

export default dashboard;
