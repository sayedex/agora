import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ATTRIBUTES } from "../../config/collection";
import chainlink from "../../public/icon/chainlink.png";
import { NFTMetadata } from '../../typeing';
import AttributesComponent from "./Helper/AttributesComponent"
import { ATTRIBUTES_COUNT_AMOUNT,RareColor } from "../../config";
type Props = {
  metadata:NFTMetadata | null;
  Isregen?:Boolean ,
  rarity:string
};

export function Attributes({metadata,Isregen,rarity}: Props) {
  const Attributes = {
    Luck: 0,
    Might: 0,
    Resilience: 0,
    Serge: 0,
    Wit: 0,
  };

  const rarityText = String(rarity).replace(/\s/g, "");
  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];


  const data:any =metadata?metadata.character_traits:Attributes;

  return (
    <div className="border border-[#262C33] mt-10 p-5 flex flex-col gap-y-3">
      <h2 className="text-3xl font-extrabold text-center bg_gr text-transparent bg-clip-text tracking-[1px] uppercase">
        Attributes
      </h2>
      <p className="text-sm text-center">
        UPON MINTING <span style={{
          color:secretRareColor
        }}>{rarity}</span> NFTS ARE GIVEN {ATTRIBUTES_COUNT_AMOUNT[rarityText as keyof typeof ATTRIBUTES_COUNT_AMOUNT]} OF 5 RANDOM ATTRIBUTES THAT
        HAVE A RANDOM POWER SCALE FROM 1-100.
      </p>

      <div>
        <AttributesComponent attributes={Isregen?data:Attributes} />
      </div>

      <div className="flex flex-wrap items-center gap-3 m-auto">
        <p>Powered by</p>
        <LazyLoadImage className="max-w-[100px]" src={chainlink.src} />
        <p>
          <a
            className="text-[#1C84FE] uppercase"
            href="http://"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </p>
      </div>
    </div>
  );
}
