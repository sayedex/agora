import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { Manu } from "../../../config/manu";

type Props = {};

function Sidebar({}: Props) {
  return (
    <div className="w-[300px] h-screen sticky top-0 bg-white p-5 ">
      <div>
        <div className=" flex flex-col justify-start item-center h-full">
          <Link className="flex flex-row items-center gap" href="/">
            <Image src="" alt="logo" width={50} height={20} />

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
