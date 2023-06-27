import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";

import agora_logo_noshadow from "../../../public/agora_logo_no-shadow.svg";
import jedstar_logo_only from "../../../public/jedstar_logo_only.svg"

import { Manu,orderManu } from "../../../config/manu";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="w-[300px] h-screen sticky top-0 bg-[#2d2d2d] p-5 ">
      <div>
        <div className=" flex flex-col justify-start item-center h-full">
        <Link
          href="/"
          className="cursor-pointer flex justify-center items-center gap-5"
        >
          {/* logo */}
          <div className="border-r border-dashed border-gray-500 pr-5">
            <LazyLoadImage
              src={jedstar_logo_only.src}
              width={50}
              alt="logo"
              className=" cursor-pointer"
              height={50}
            />
          </div>

          <div>
            <LazyLoadImage
              src={agora_logo_noshadow.src}
              width={130}
              alt="logo"
              className=" cursor-pointer"
              height={50}
            />
          </div>
        </Link>


          <div className="pt-10 my-4 border-b border-gray-100 pb-4">
            <Link href="/admin/dashboard">
              <div className="sidemanu group globalTextcolor  ">
                <MdOutlineSpaceDashboard className="sidebaricon" />
                <h3 className="sidebartext   ">Dashboard</h3>
              </div>
            </Link>
          </div>

          {/* Profile  */}
          <div className="globalTextcolor my-4 border-b border-gray-100 pb-4 flex-1">
            <h1 className="pb-3">Manage product</h1>
            {Manu.map((data, index) => {
              return (
                <Link key={index} href={data.link}>
                  <div className="sidemanu group globalTextcolor">
                    {/* <data.icon className="sidebaricon" /> */}
                    <h3 className="sidebartext">{data.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>
 {/* Profile  */}
 <div className="globalTextcolor my-4 border-b border-gray-100 pb-4 flex-1">
            <h1 className="pb-3">Manage Order</h1>
            {orderManu.map((data, index) => {
              return (
                <Link key={index} href={data.link}>
                  <div className="sidemanu group globalTextcolor">
                    {/* <data.icon className="sidebaricon" /> */}
                    <h3 className="sidebartext">{data.name}</h3>
                  </div>
                </Link>
              );
            })}
          </div>



          {/* logout */}
          <div className=" my-4">
            <div className="sidemanu group globalTextcolor">
              <MdOutlineLogout className="sidebaricon" />
              <h3 className="sidebartext ">Logout</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
