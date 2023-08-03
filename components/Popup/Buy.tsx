import Popup from "reactjs-popup";
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
// logo.
import { DualTitleImage } from "./Helper/Platfrombox";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { setBuypopup,setDepositPopup } from "../../store/walletSlice";

type Props = {};

const Buy = () => {
  const dispatch = useAppdispatch();
  const { Buypopup } = useAppSelector((state) => state.wallet);

  const ContentStyle = {
    backgroundColor: "#262C33",
    borderRadius: "0px",
    padding: 0,
    width: "100%",
    margin: "0",
    height: "fit-content",
  };
  const closeModal = () => {
    dispatch(setBuypopup(false));
  };

  return (
    <div>
      <Popup
        contentStyle={ContentStyle}
        open={Buypopup}
        className="rounded-lg bg-red-400"
        onClose={closeModal}
      >
        <div className="p-5  md:p-10">
          <div className="flex justify-end p-6  h-fit">
            <XMarkIcon
              onClick={() => dispatch(setBuypopup(false))}
              className="text-white hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative"
              width={30}
              height={30}
            />
          </div>
          <h1 className="text-4xl text-[#1C84FE] font-extrabold uppercase py-10">
            HOW <span className="text-white"> TO BUY</span>
          </h1>
          <div className="rainbow-border"></div>
          <div id="scrollbar" className="overflow-y-scroll overflow-x-hidden h-[70vh] p-3">

        
          <div className="text-center flex flex-col gap-3 my-6 ">
            <p>
{`              Once you have connected your wallet to AGORA you will be able to
              load your account with credit. Once you have the appropriate
              amount of funds or crypto, you will be able to click the 'BUY NOW'
              button below the NFT of your choice in order to process the
              purchase. Once purchased, your GENESIS NFT will Mint with random
              Attributes, which provide bonuses and utility in the JEDSTAR
              universe of Apps and Games.`}
            </p>
            <p>{`1. Connect your wallet`}</p>
            <p>
          {`    2. Ensure you have the appropriate amount of KRED, USDC, USDT or
              BUSD`}
            </p>
            <p>{`3. Click 'BUY NOW' on the GENESIS NFT of your choice`}</p>
            <p>{`4. Your NFT will be MINTED`}</p>
            <p>
       {`       5. You can then view your GENESIS NFT on 'MY AGORA' and OpenSea`}
            </p>
          </div>

          <div className="m-auto text-center">
            <button
              className=" text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  bg_btn_gr"
            >
              <div onClick={()=>dispatch(setDepositPopup(true))} className="bg-[#262C33] btn_upperlayer">
                Deposit
              </div>
            </button>
          </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Buy;
