import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LayerIMG from "../../public/IMG/layer.png";
import Test from "../../public/nft/0.jpg"
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

  return (
    <div className="bg-white max-w-[400px]	relative m-5 p-2 rounded-lg  shadow-md bg-blend-multiply border hover:opacity-75">
      {/* nft  */}


      {/* img */}
      <LazyLoadImage
        placeholderSrc={LayerIMG.src}
        className="rounded-lg border w-full"
        src={Test.src}

      />
      {/* img */}

      {/* name  */}
      <div className="pb-1">
        <p className="text-neutral-800	 font-medium font-sans	text-xs	">#{token_id}</p>
        <h1 className="text-neutral-800		font-bold font-sans	text-lg	">{name}</h1>
      </div>
      {/* name  */}

      {/* listing price */}

      {/* <h2 className='text-base	font-bold		'>{'50'} ETH</h2> */}

      {/* <img alt="hey" src={Layyerimg.src}/> */}
    </div>
  );
}
