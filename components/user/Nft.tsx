import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LayerIMG from "../../public/IMG/layer.png";
import Test from "../../public/nft/0.jpg";
import { RareColor } from "../../config";
interface nft{
  metadata:any,
  name:string,
  token_id:string
}


type Props = {
   nft:nft
};

export function Nft({nft}: Props) {
  const {name,token_id} = nft;
  const rarity  = "Common";
  const rarityText = String(rarity).replace(/\s/g, "");
  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];

  return (
    <div className="md:max-w-[290px] bg-gradient-to-b from-gray-700 to-transparent pb-7  ">
      {/* nft  */}


      {/* img */}
      <LazyLoadImage
        placeholderSrc={LayerIMG.src}
        className="md:max-w-[290px] bg-gradient-to-b from-gray-700 to-transparent p-2 "
        src={Test.src}

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
          style={{ backgroundColor: secretRareColor}}
          className={`w-fit px-1 `}
        >
          {"Common"}
        </p>
      </div>

      {/* rarity */}

      {/* <h2 className='text-base	font-bold		'>{'50'} ETH</h2> */}

      {/* <img alt="hey" src={Layyerimg.src}/> */}
    </div>
  );
}
