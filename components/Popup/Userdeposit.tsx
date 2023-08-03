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
import qrcode from "../../public/Token/qrcode.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { depositInfo1, depositInfo2, Impotancede } from "../../config";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { setDepositPopup } from "../../store/walletSlice";

type Props = {};
 const Userdeposit = () => {
  const dispatch = useAppdispatch();
  const { DepositPopup } = useAppSelector((state) => state.wallet);
  const ContentStyle = {
    backgroundColor: "#303030",
    borderRadius: "10px",
    padding: 0,
    width: "100%",
    margin: "0",
    height: "fit-content",
  };
  const closeModal = () => {
    dispatch(setDepositPopup(false));
  };

  return (
    <div id="scrollbar" className={`${DepositPopup?" overflow-y-scroll bg-[#262C33] max-h-[90vh] w-full overflow-x-hidden fixed z-[100]":"hidden"}`}>
      <Popup
        contentStyle={ContentStyle}
        open={DepositPopup}
        className="rounded-lg bg-red-400"
        onClose={closeModal}
        
      >
        <div className="flex justify-end p-6  h-fit">
          <XMarkIcon
            onClick={() => closeModal()}
            className="text-white hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-wrap items-center w-full justify-between p-5 gap-3 ">
          <div className="relative py-4 w-full">
            <h1 className="text-4xl text-[#1C84FE] font-extrabold uppercase">
              Deposit <span className="text-white">credit</span>
            </h1>
            <div className="bg_btn_gr w-full h-[5px] absolute bottom-0"></div>
          </div>

          <div className="flex flex-wrap items-center gap-3"></div>
        </div>

        <div id="scrollbar" className="flex flex-col md:flex-row gap-5 items-center p-5 md:p-10 overflow-y-scroll overflow-x-hidden h-[70vh] md:overflow-hidden">
          <div className="w-full md:w-[30%]">
            <LazyLoadImage className="m-auto" src={qrcode.src} />
          </div>

          <div className="w-full md:w-[70%] text-xl">
            {depositInfo1?.map((e, index) => {
              return (
                <p className="py-2" key={index}>
                  {e}
                </p>
              );
            })}
            <p>
              Accepted currencies:
              <span className="font-extrabold"> $KRED, USDT & USDC. </span>
            </p>
            {depositInfo2?.map((e, index) => {
              return (
                <p className="py-2  font-medium font-sans	  break-words	w-full" key={index}>
                  {e}
                </p>
              );
            })}
            {Impotancede?.map((e, index) => {
              return (
                <p key={index} className="text-red-600 font-bold py-2">
                  {e}
                </p>
              );
            })}
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Userdeposit;
