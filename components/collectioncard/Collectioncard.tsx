import React from "react";
import { nftData } from "../../typeing";
import { Card } from "../card/Card";
type Props = {
  data: nftData[];
  cetagory: string;
};

export function Collectioncard({ data, cetagory }: Props) {
  // here we will filter as parms...
  return (
    <div className="max-w-7xl m-auto px-3 md:px-14">
      <div className="rainbowborder h-[8px] mb-6"></div>
      <h1 className="text-[#1C84FE] text-4xl font-extrabold">
        GENESIS MINT <span className="text-white">{cetagory}</span>
      </h1>

      <div className="flex justify-start flex-wrap gap-5 pt-10 pb-[100px]">
        {data.map((el: nftData) => {
          return <Card carddata={el} />;
        })}
      </div>
    </div>
  );
}
