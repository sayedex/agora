import React from "react";
import { product } from "../../store/productSlice";
import { Card } from "../card/Card";
type Props = {
  data: product[];
  cetagory: string;
};

export function Collectioncard({ data, cetagory }: Props) {

  // here we will filter as parms...
  const items = data.filter((e)=>e.series === cetagory);

  return (
    <div className="max-w-7xl m-auto p-4 md:p-5">
      <div className="rainbowborder h-[8px] mb-6"></div>
      <h1 className="text-[#1C84FE] text-4xl font-extrabold">
        GENESIS MINT <span className="text-white">{cetagory}</span>
      </h1>

      <div className="flex justify-start flex-wrap gap-5 pt-10 pb-[100px]">
        {items.filter((e)=>!e.featured).map((el: product,indx) => {
          return <Card carddata={el} key={indx} />;
        })}
      </div>
    </div>
  );
}
