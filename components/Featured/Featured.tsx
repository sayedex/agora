import React from "react";
import { product } from "../../store/productSlice";
import { Card } from "../card/Card";
import dummuyImage from "../../public/nft/pic_TONY.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
type Props = {
  data: product[];
  cetagory: string;
};

export function Featured({ data, cetagory }: Props) {
  // here we will filter as parms...
  return (
    <div className="max-w-7xl m-auto p-4 md:p-5">
      <div className="rainbowborder h-[8px] mb-6"></div>
      <h1 className="text-[#1C84FE] text-4xl font-extrabold">
        FEATURED ARTIST <span className="text-white">{cetagory}</span>
      </h1>

      <div className="flex flex-col md:gap-x-7 md:flex-row pt-10 ">
        {/*  here is Artist info.... */}

        <div className="md:max-w-[265px]">
          <div>
            <LazyLoadImage
              className="max-w-[197px] m-auto"
              src={dummuyImage.src}
            />
          </div>

          {/* title */}
          <div className="">
            <h2 className="text-2xl font-extrabold text-center  bg_gr text-transparent bg-clip-text tracking-[1px] pt-5">
              TONY MOY
            </h2>
            <p className="text-white text-sm pt-3">
              Debuting his first ever NFT collection Tony is a mixed media
              artist who focuses on traditional watercolor and gouache
              paintings. From The Maxx to Dungeons and Dragons, his portfolio
              speaks for itself in the comic and fantasy genre. Not only does he
              create amazing art, he also gives back by teaching at the
              prestigious School of the Art Institute of Chicago.
            </p>
          </div>
        </div>

        {/* here is Artist info.... */}

        <div className="flex justify-start flex-wrap gap-5 pt-10 md:pt-0  pb-[100px]">
          {data.map((el: product,indx) => {
            return <Card carddata={el} key={indx} />;
          })}
        </div>
      </div>
    </div>
  );
}
