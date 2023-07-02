import { useConnect } from "wagmi";
import { useTheme } from "next-themes";
import { ConnectButton } from "./connect";
import { Popover, Transition } from "@headlessui/react";
import logo from "../../public/logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
//logo import
import jedstar_logo_only from "../../public/jedstar_logo_only.svg";
import agora_logo_noshadow from "../../public/agora_logo_no-shadow.svg";

//header list...
import { HeaderList } from "../../config/Header/Headerlist";
import  PopupforPlatfroms  from "../Popup/PopupforPlatfroms";

export function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const PlatformsModel = useRef<{
    openPopup: () => void;
    closePopup: () => void;
  }>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isPopupOpen, setPopupOpen] = useState(false);

  function openPopup() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  return (
    <Popover className="bg-[#13181D] z-50 sticky top-[0px] w-full ">
      <PopupforPlatfroms ref={PlatformsModel} />
      <div
        className="flex items-center px-2  justify-between max-w-7xl m-auto
    transform  backdrop-blur-none
     text-white z-50  top-[0px]
      sticky py-3"
      >
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
        {/* logo */}

        {/* ul */}
        <div className="hidden lg:flex items-center gap-x-8">
          <ul className="flex gap-2 font-semibold whitespace-nowrap">
            {HeaderList.map((e, index) => {
              return (
                <li onClick={openPopup} key={index}>
                  {e.route ? (
                    <Link href={e.link} onClick={() => {}}>
                      <p className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark  dark:hover:bg-slate-800 p-4 transition-all">
                        {e.name}
                      </p>
                    </Link>
                  ) : e.islink ? (
                    <Link
                      href={e.link}
                      onClick={() => {}}
                      target="blank"
                      rel="noreferrer"
                    >
                      <p className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark  dark:hover:bg-slate-800 p-4 transition-all">
                        {e.name}
                      </p>
                    </Link>
                  ) : (
                    <a
                      onClick={() => {
                        if (!e.islink) {
                          PlatformsModel.current?.openPopup();
                        }
                      }}
                    >
                      <p className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark  dark:hover:bg-slate-800 p-4 transition-all">
                        {e.name}
                      </p>
                    </a>
                  )}

                  {}
                </li>
              );
            })}
          </ul>
          {/* ul */}

          {/* button */}
          <div className=" items-center gap-5 hidden md:flex">
            <ConnectButton />
          </div>
        </div>
        {/* button */}

        {/* mobile manu */}

        <div className="flex flex-row items-center gap-x-2 lg:hidden">


          <Popover.Button>
            <div className="flex flex-row gap-x-2">
              <div className=" items-center gap-5 "></div>

              <div className="cursor-pointer p-2 rounded-lg dark:hover:bg-slate-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              </div>
            </div>
          </Popover.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="absolute z-20 inset-0 top-[70px] bg-black dark:bg-primary-dark 	">
              <div className="flex flex-col items-start bg-black w-full  drounded-lg ">
                {HeaderList &&
                  HeaderList.map((e, index) => {
                    return (
                      <Link
                      key={index}
                        className="w-full"
                        href={e.link}
                        target={e.islink ? "" : "black"}
                        rel={e.islink ? "" : "noreferrer"}
                      >
                        <p className="relative flex items-center gap-2 cursor-pointer rounded dark:hover:bg-secondary-dark hover:bg-slate-800 p-4 transition-all">
                          {e.name}
                        </p>
                      </Link>
                    );
                  })}
                          <div className="py-4 px-4">
                          <ConnectButton />
                          </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>

        {/* mobile manu */}
      </div>
      <div className=" m-auto w-11/12	max-w-[1300px] bg-gradient-to-t from-blue-500 to-purple-500 transform -translate-y-0 h-0 pt-[1px] z-50"></div>
    </Popover>
  );
}
