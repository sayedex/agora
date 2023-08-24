import React from "react";
import Image from "next/image";
type Props = {
  name: string;
  value: number;
};

export const BalanceToken = ({ name, value }: Props) => {
    console.log(name);
    
  return (
    <div className="">
      <div className="flex flex-row justify-between border-b dark:bg-[#414141] m-5 items-center px-4  border dark:border-none  relative h-fit py-2 ">
       
      <div className="  rounded-3xl h-[40px]">
          <span className="cursor-pointer  rounded-3xl hover:bg-slate-700 uppercase">
            <div className="flex flex-row gap-x-2 p-2">
              {/* <Image
                className="relative"
                src={`/Token/dai.svg`}
                width={22}
                height={22}
                alt={name}
              /> */}
              {name}
            </div>
          </span>
        </div>

       
        <div>{Number(value).toFixed(0)}</div>
      </div>
    </div>
  );
};
