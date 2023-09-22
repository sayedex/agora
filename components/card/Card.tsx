import React from "react";
import { product } from "../../store/productSlice";
import dummyiimage from "../../public/nft/0.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import LayerIMG from "../../public/IMG/layer.png";
import { RareColor } from "../../config";
import LazyloadImage from "../Imagecom/LazyloadImage";
type Props = {
  carddata: product;
};

export function Card({ carddata }: Props) {
  const router = useRouter();
  const RedirectBuypage = () => {
    router.push(`/buy?id=${carddata.productid}`);
  };

  const { rarity } = carddata;
  const rarityText = String(rarity).replace(/\s/g, "");
  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];

  return (
    <div className="m-auto md:max-w-[215px] h-fit  bg-gradient-to-b from-gray-700 to-transparent ">
      {/* image  */}
      <div className="p-2">
        <LazyloadImage src={carddata.imgUrl || dummyiimage.src} />
      </div>
      {/* image  */}

      {/* name and dec */}
      <div className="px-2">
        <p className="text-sm text-[#827A8E] font-medium uppercase">Name</p>
        <p className="text-sm text-white font-semibold">{carddata.name}</p>
      </div>

      {/* name and dec */}

      {/* rarity */}
      <div className="px-2 pt-2">
        <p
          style={{ backgroundColor: secretRareColor }}
          className={`w-fit px-1  text-sm  text-black`}
        >
          {carddata.rarity}
        </p>
      </div>

      {/* rarity */}

      {/* price */}
      <div className="px-2 mt-4">
        <p className="text-lg text-[#827A8E] font-medium uppercase">Price</p>
        <p className="text-white ">{carddata.USD}USDC</p>
      </div>

      {/* price */}

      {/* minted */}
      <p className="text-center text-[#827A8E] py-4">
        {carddata.minted} MINTED
      </p>
      {/* minted */}

      {/* buy button */}
      <div className="relative flex-1">
        <button
          onClick={() => RedirectBuypage()}
          className="w-full bg_btn_gr  p-[2px] relative hover:bg-none"
        >
          <div className="btn_upperlayer ">Buy now</div>
        </button>
      </div>

      {/* buy button */}
    </div>
  );
}
