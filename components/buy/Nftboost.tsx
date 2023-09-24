import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//check
import checkicon from "../../public/icon/check.svg";
import SILVERVOLT_LOGO from "../../public/icon/SILVERVOLT_LOGO.webp";
import { NFTMetadata } from "../../typeing";
import { Bost } from "../../config";

type Props = {
  metadata: NFTMetadata | null;
  Isregen?: Boolean;
  buypagerarity: string;
};

export function Nftboost({ metadata, Isregen, buypagerarity }: Props) {
  const boster: any = metadata?.attributes;

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
            className="text-[#1C84FE] ml-[4px]"
            href="https://www.silvervolt.app/"
            target="_blank"
            rel="noreferrer"
          >
            www.silvervolt.app
          </a>
        </p>
      </div>

      <div className="flex flex-wrap gap-5 justify-start">
        {
          // This map will maping our static data and try to metch with trait_type
          Bost.map((e: any, indx: number) => {
            const matchingItem = boster?.find(
              (item: any) =>
                item.trait_type &&
                item.trait_type.trim() === e.trait_type?.trim()
            );

            const matchingItemForRegen = boster?.find(
              (item: any) =>
                item.trait_type && item.trait_type.trim() === e.type?.trim()
            );

            const value = matchingItem?.value;
            // checking if value not undifined
            const isThereValue = value != undefined;
            // checking if its single value or {1,2,1 } value
            const IsSingleValue = isThereValue
              ? value
                ? value.toString().indexOf(",") === -1
                : true
              : false;

            // console.log(
            //   `IsSingleValue:${IsSingleValue} value:${value} name:${e.name}`
            // );

            //checking if its array value + not undefined
            const IsThisArrayvalue =
              isThereValue && IsSingleValue === false && IsSingleValue !== null;

            // if value is {1,2,1 } then we split it and add 💎
            const valuesArray =
              IsThisArrayvalue &&
              value?.split(",").map((v: string) => `💎${v}`);

            const Rere = boster?.find(
              (item: any) =>
                item.trait_type && item.trait_type.trim() === "Rarity"
            );

            // @dev it will check if its unavailable for this Rarity or not
            const matchNotAllowFound =
              e.showcondition &&
              Rere &&
              e.unavailable.some((el: any) => el === Rere.value);

            // @dev it will check if its unavailable for this Rarity or not
            const rarityText = String(buypagerarity)
              .toLowerCase()
              .replace(/^\w/, (c) => c.toUpperCase());

            const matchNotAllowFoundForBuypage =
              e.showcondition &&
              e.unavailable.some((el: any) => {
                return el == rarityText;
              });

            return (
              <div
                key={indx}
                className={`w-full md:w-[300px] block gap-y-2 border border-[#262C33]   pt-3 relative ${
                  Isregen
                    ? matchingItemForRegen?.value == 0 || matchNotAllowFound
                      ? "opacity-20"
                      : "opacity-100"
                    : matchNotAllowFoundForBuypage
                    ? "opacity-20"
                    : "opacity-100"
                }`}
              >
                <div>
                  <LazyLoadImage className="m-auto" src={checkicon.src} />
                </div>
                <div className="m-auto ">
                  <p className="text-center text-2xl uppercase px-4  font-bold m-4">
                    {isThereValue && !IsThisArrayvalue && `${value}%`} {e.name}
                  </p>
                </div>
                <div>
                  {Isregen ? (
                    <p className="text-center text-[#827A8E] font-extrabold globaldarktext text-sm px-4 mb-8">
                      {IsThisArrayvalue && valuesArray.join(", ")}{" "}
                      {e.dyamicInfo}
                    </p>
                  ) : (
                    <p className="text-center text-[#827A8E] font-extrabold globaldarktext text-sm px-4 mb-8">
                      {e.traits_info}
                    </p>
                  )}
                </div>

                {e.type && (
                  <div className="boost-stat flex justify-center items-center relative   ">
                    <p className="absolute mt-[2rem] text-center text-[14px]">
                      {e.type}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
