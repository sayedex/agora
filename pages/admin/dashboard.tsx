import React from "react";
import { Box } from "../../components/admin/dashboard/Box";

type Props = {};

function dashboard({}: Props) {
  return (
    <div className="w-full">
      <h1 className="uppercase font-bold p-10">dashboard</h1>

      <div className="flex flex-wrap justify-center gap-5">
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default dashboard;
