import React, { useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FotterItem } from "../../config/Fotter/Config";
import { PopupforPlatfroms } from "../Popup/PopupforPlatfroms";
function Footer() {
  const PlatformsModel = useRef<{
    openPopup: () => void;
    closePopup: () => void;
  }>(null);

  return (
    <>
    <PopupforPlatfroms ref={PlatformsModel}/>
      <div className="flex flex-col md:flex-row max-w-7xl m-auto justify-between text-white items-center py-5 gap-5">
        {/* fotter link */}
        <div className="flex flex-row gap-5">
          <a href="" className="bg_btn_gr pb-[5px]">
            <div className="bg-[#13181D] pb-[5px]">About us</div>
          </a>

          <div
            onClick={() => {
              PlatformsModel.current?.openPopup();
            }}
            className="bg_btn_gr pb-[5px] cursor-pointer"
          >
            <div className="bg-[#13181D] pb-[5px]">Platforms</div>
          </div>
        </div>

        {/* fotter link */}

        {/* copyright  */}
        <div>
          <p className="text-[#827A8E]">Jedstar inc. ©2022</p>
        </div>
        {/* copyright  */}

        {/* social icon */}
        <div className="flex gap-2">
          {FotterItem?.map((e) => {
            return (
              <a href="">
                <LazyLoadImage
                  className="max-w-[36px]"
                  src={e.icon}
                  alt={e.name}
                />
              </a>
            );
          })}
        </div>
        {/* social icon */}
      </div>
    </>
  );
}

export default Footer;
