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
import { setPlatformpopip } from "../../store/walletSlice";
import IMgnumone from "../../public/icon/SILVERVOLT_LOGO.webp"
type Props = {};

const PopupforPlatfroms = () => {
  const dispatch = useAppdispatch();
  const { Platformpopup } = useAppSelector((state) => state.wallet);

  const ContentStyle = {
    backgroundColor: "#303030",
    borderRadius: "10px",
    padding: 0,
    width: "100%",
    margin: "0",
    height: "fit-content",
    
  };
  const closeModal = () => {
    dispatch(setPlatformpopip(false));
  };

  return (
    <div id="scrollbar" className={`${Platformpopup?" overflow-y-scroll bg-[#262C33] max-h-[90vh] w-full overflow-x-hidden fixed z-[100]":"hidden"}`}>
      <div
        className="rounded-lg bg-[#262C33]  "
    
      >
        <div className="flex justify-end p-6  h-fit ">
          <XMarkIcon
            onClick={() => closeModal()}
            className="text-white hover:text-gray-500 font-semibold dark:text-white cursor-pointer relative"
            width={30}
            height={30}
          />
        </div>

        <div className="flex flex-col md:flex-row py-5 md:p-10 ">
          <DualTitleImage
            title1="Charge-to-Earn (C2E) auction platform, where Generators would charge their phones to generate VOLTS through our app, which can then be used to bid for, and win exclusive gaming prizes."
            title2="CHARGE. GENERATE. WIN.        "
            imageSrc={IMgnumone.src}
            btnName="Launch Now"
          />

          <DualTitleImage
            title1="Charge-to-Earn (C2E) auction platform, where Generators would charge their phones to generate VOLTS through our app, which can then be used to bid for, and win exclusive gaming prizes."
            title2="CHARGE. GENERATE. WIN.        "
            imageSrc={IMgnumone.src}
            btnName="Now Live"
          />
        </div>
      </div>
    </div>
  );
};

export default PopupforPlatfroms;
