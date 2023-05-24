import React from "react";
import Bg from "../../public/Home/genesis_name_bg.png";
import agoramarketplace from "../../public/Home/agoramarketplace.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ConnectButton } from "../Header/connect";
export function Homesection() {
  const Bgstyle = {
    backgroundImage: "url('Home/genesis_name_bg.png')",
  };

  return (
    <div>
      <div style={Bgstyle} className="relative  bg-cover bg-center bg-no-repeat pb-5">

        {/* logo  */}
        <div className="p-10">
          <LazyLoadImage
            src={agoramarketplace.src}
            alt="Solanart"
            className=" cursor-pointer w-[26vw] h-[8.84vw] text-center m-auto"
          />
        </div>

        <div className=" mt-[30vw] md:mt-[10vw]  ml-auto mr-auto text-center">
          <p className="text-white text-[2.7vw] md:text-lg font-semibold tracking-[1px]">
            {"“Genesis Mint” NFT Sale is live."}
          </p>
          <div className="pt-3">
            <ConnectButton />
          </div>
        </div>
      </div>

      <div className="m-auto py-[70px]">
        <h2 className="text-3xl font-extrabold text-center  bg_gr text-transparent bg-clip-text tracking-[1px]">
          ABOUT THE GENESIS MINT
        </h2>

        <div className="flex extrasmall:flex-col p-10 flex-row gap-5 m-auto justify-center py-5">
          <button
            className=" text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  bg_btn_gr"
          >
            <div className="bg-[#13181D] px-6 py-2  m-[2px]">How to buy</div>
          </button>

          <button
            className=" text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap bg_btn_gr"
          >
            <div className="bg-[#13181D] px-6 py-2  m-[2px]">Learn More</div>
          </button>

          
        </div>
      </div>
    </div>
  );
}
