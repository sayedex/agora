import React from "react";
import { product } from "../../store/productSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dummyiimage from "../../public/nft/0.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
type Props = {
  carddata: product;
};

export function Card({ carddata }: Props) {
  const router = useRouter();
  const RedirectBuypage = () => {
    router.push(`/buy?id=${carddata._id}`);
  };

  return (
    <div className="md:max-w-[253px] bg-gradient-to-b from-gray-700 to-transparent ">
      {/* image  */}
      <div className="p-1">
        <LazyLoadImage src={dummyiimage.src} alt="image" />
      </div>
      {/* image  */}

      {/* name and dec */}
      <div className="px-2">
        <p className="text-lg text-[#827A8E] font-medium uppercase">Name</p>
        <p className="text-lg text-white font-semibold">
         {carddata.name}
        </p>
      </div>

      {/* name and dec */}

      {/* rarity */}
      <div className="px-2">
        <p className="bg-[#E431FF] w-fit px-1">{carddata.rarity}</p>
      </div>

      {/* rarity */}

      {/* price */}
      <div className="px-2 mt-4">
        <p className="text-lg text-[#827A8E] font-medium uppercase">Price</p>
        <p className="text-white ">USDC 100</p>
      </div>

      {/* price */}

      {/* minted */}
      <p className="text-center text-[#827A8E] py-4">{carddata.minted} MINTED</p>
      {/* minted */}

      {/* buy button */}
      <div className="relative">
        <button
          onClick={() => RedirectBuypage()}
          className="w-full bg_btn_gr  p-[2px] relative"
        >
          <div className="bg-[#13181D] hover:bg-white hover:text-black w-full text-white text-sm py-1  ">
            Buy now
          </div>
        </button>
      </div>

      {/* buy button */}
    </div>
  );
}
