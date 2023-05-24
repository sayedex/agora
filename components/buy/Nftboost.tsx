import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//check
import checkicon from "../../public/icon/check.svg";
import SILVERVOLT_LOGO from "../../public/icon/SILVERVOLT_LOGO.webp";
const Bost = [
  {
    trait_type: "Silvervolt Referral Boost",
    value: 5,
    max_value: 6,
  },
  {
    trait_type: "Silvervolt Lottery 1st Ticket Cost",
    value: 1,
  },
  {
    trait_type: "Silvervolt Lottery 2nd Ticket Cost",
    value: 5,
  },
  {
    trait_type: "Silvervolt Lottery 1st Ticket Cost",
    value: 1,
  },
  {
    trait_type: "Silvervolt Lottery 2nd Ticket Cost",
    value: 5,
  },
    {
    trait_type: "Silvervolt Lottery 2nd Ticket Cost",
    value: 5,
  },
];

type Props = {};

export function Nftboost({}: Props) {
  return (
    <div>
      <div className="flex flex-col gap-y-3 mb-5">
        <div>
          <LazyLoadImage src={SILVERVOLT_LOGO.src} className="h-14" />
        </div>
        <p>
          This NFT offers various in app Boosts and Upgrades to our SILVERVOLT
          gaming product. Sign up and top off your favorite games for FREE at
         <a className="text-[#1C84FE]" href="http://" target="_blank" rel="noreferrer"> www.silvervolt.app</a>
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center ">
        {Bost.map((e, indx) => {
          return (
            <div className="max-w-[190px] flex flex-col gap-y-2 border border-[#262C33] p-3">
              <div>
                <LazyLoadImage className="m-auto" src={checkicon.src} />
              </div>
              <div className="m-auto">
                <p className="text-center text-2xl uppercase  font-bold">
                  bid boost
                </p>
              </div>
              <div>
                <p className="text-center globaldarktext text-sm">
                  Gives you additional weekly auction bids. Up to 4 / week for a
                  Ultra rare.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
