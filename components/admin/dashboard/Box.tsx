import React from "react";
import Link from "next/link";

type Props = {};

export function Box({}: Props) {
  return (
    <Link href="/">
    <div className="border rounded-full p-10 h-[200px] w-[200px] relative cursor-pointer">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-lg">Product</h1>
        <h1>10</h1>
      </div>
    </div></Link>
  );
}
