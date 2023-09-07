import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LayerIMG from "../../public/IMG/layer.png";
import Test from "../../public/nft/0.jpg";
import { RareColor } from "../../config";
import { useRouter } from "next/router";
interface nft {
  metadata: any;
  name: string;
  token_id: string;
  productId: any;
}

type Props = {
  nft: nft;
};

export function Nft({ nft }: Props) {
  const [rare, setrare] = useState("");
  const router = useRouter();
  const { name, token_id, metadata } = nft;
  const { productId, image, last_generation_time, attributes } =
    JSON.parse(metadata);

  const rarityText = String(rare).replace(/\s(\w)/g, (_, letter) =>
    letter.toUpperCase()
  );

  useEffect(() => {
    if (attributes) {
      const Attributes = attributes?.filter((e: any) => {
        return e.trait_type == "Rarity";
      });
      setrare(Attributes[0].value);
    }
  }, [attributes]);

  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];

  const RedirectBuypage = () => {
    router.push(`/regen?id=${productId}&&token=${token_id}`);
  };

  return (
    <div
      onClick={() => RedirectBuypage()}
      className="md:max-w-[290px] bg-gradient-to-b from-gray-700 to-transparent pb-7 cursor-pointer  "
    >
      {/* nft  */}

      {/* img */}
      <LazyLoadImage
        placeholderSrc={LayerIMG.src}
        className="md:max-w-[290px] bg-gradient-to-b from-gray-700 to-transparent p-2 "
        src={image}
      />
      {/* img */}

      {/* name and dec */}
      <div className="px-2">
        <p className="text-lg text-[#827A8E] font-medium uppercase">Name</p>
        <p className="text-lg text-white font-semibold">{name}</p>
      </div>

      {/* name  */}

      {/* rarity */}
      <div className="px-2">
        <p
          style={{ backgroundColor: secretRareColor }}
          className={`w-fit px-1 text-black `}
        >
          {rare}
        </p>
      </div>

      {/* rarity */}

      {/* <h2 className='text-base	font-bold		'>{'50'} ETH</h2> */}

      {/* <img alt="hey" src={Layyerimg.src}/> */}
    </div>
  );
}
