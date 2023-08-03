import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//check
import checkicon from "../../public/icon/check.svg";
import SILVERVOLT_LOGO from "../../public/icon/SILVERVOLT_LOGO.webp";

import { Bost } from "../../config";

type Props = {};

export function Nftboost({}: Props) {
  return (
    <div>
      <p className="py-5">
        This NFT offers utility across the JEDSTAR universe of apps and games.
      </p>
      <div className="flex flex-col gap-y-3 mb-5 pt-5">
        <div>
          <LazyLoadImage src={SILVERVOLT_LOGO.src} className="h-14" />
        </div>
        <p>
          This NFT offers various in app Boosts and Upgrades to our SILVERVOLT
          gaming product. Sign up and top off your favorite games for FREE at
          <a
            className="text-[#1C84FE]"
            href="http://"
            target="_blank"
            rel="noreferrer"
          >
          
            www.silvervolt.app
          </a>
        </p>
      </div>

      <div className="flex flex-wrap gap-5 justify-start ">
        {Bost.map((e, indx) => {
          return (
            <div
              key={indx}
              className="max-w-[250px] flex flex-col gap-y-2 border border-[#262C33]   pt-3 relative"
            >
              <div>
                <LazyLoadImage className="m-auto" src={checkicon.src} />
              </div>
              <div className="m-auto ">
                <p className="text-center text-2xl uppercase  font-bold">
                  {e.trait_type}
                </p>
              </div>
              <div>
                <p className="text-center globaldarktext text-sm">
                  {e.traits_info}
                </p>
              </div>

              {e.type && (
                <div className="boost-stat flex justify-center items-center relative   ">
                  <p className='absolute mt-[2rem]' >{e.type}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
