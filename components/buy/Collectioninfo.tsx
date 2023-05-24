import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { collectionshare } from "../../config/collection";
import { Description } from "./Description";
import {Attributes} from "./Attributes";
import { Nftboost } from "./Nftboost";
import {Coming} from "./Coming"
type Props = {};

export function Collectioninfo({}: Props) {
  return (
    <div className="flex-1 flex flex-col gap-y-5">
      {/* titile */}
      <div className="flex flex-rows justify-between relative pb-3">
        <h2 className="text-3xl font-extrabold">
          <span className="text-[#1C84FE]">JED'S JOURNEY</span> COLLECTION
        </h2>

        <div className="flex flex-row items-center gap-1">
          {collectionshare.map((e, index) => {
            return (
              <a href="http://" target="_blank" rel="noreferrer">
                <LazyLoadImage src={e.icon} alt={e.name} />
              </a>
            );
          })}
        </div>
        <div className="bg_btn_gr absolute bottom-0 w-full h-1 "></div>
      </div>
      {/* titile */}
      {/* nft-detail-name */}

      <div className="pt-5 flex flex-col gap-y-2">
        <p className="globaldarktext uppercase">name</p>
        <h2 className="text-3xl font-extrabold text-white">JED: VICTORY LAP</h2>
        <div className="w-fit">
          <p className="bg-[#31FF5D] px-[5px] text-black">Ultra rare</p>
        </div>
      </div>

      {/* nft-detail-name */}

      {/* buy now */}
      <div className="pt-10 flex flex-col gap-y-3">
        <p>26 minted</p>
        <button
          className=" text-sm  w-fit
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap uppercase  bg_btn_gr"
        >
          <div className="bg-[#13181D] px-6 py-2  m-[2px]">Buy now</div>
        </button>
      </div>
      {/* buy now */}
      {/* Description */}
      <Description/>
       {/* Description */}
       {/* Attributes */}
       <Attributes/>
       {/* Attributes */}

       {/* traits */}
<Nftboost />
      {/* traits */}
{/* static content */}
<Coming/>
{/* static content */}
    </div>
  );
}
