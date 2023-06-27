import React from "react";
import Link from "next/link";

type Props = {
  title:string,
  count:number | undefined
};

export function Box({title,count}: Props) {
  return (
    <Link href="/">
    <div className="border bg-[#747474] rounded-full p-10 h-[200px] w-[200px] relative cursor-pointer">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-lg text-white">{title}</h1>
        <h1>{count}</h1>
      </div>
    </div></Link>
  );
}
