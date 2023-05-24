import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ATTRIBUTES } from "../../config/collection";
import chainlink from "../../public/icon/chainlink.png";
type Props = {};

export function Attributes({}: Props) {
  return (
    <div className="border border-[#262C33] mt-10 p-5 flex flex-col gap-y-3">
      <h2 className="text-3xl font-extrabold text-center bg_gr text-transparent bg-clip-text tracking-[1px] uppercase">
        Attributes
      </h2>
      <p className="text-sm text-center">
        UPON MINTING ULTRA RARE NFTS ARE GIVEN 4 OF 5 RANDOM ATTRIBUTES THAT
        HAVE A RANDOM POWER SCALE FROM 1-100.
      </p>

      <div>
        <table className="w-10/12 m-auto border-separate border-spacing-2 pt-3	">
          <tbody className="">
            {ATTRIBUTES.map((el, indx) => {
              return (
                <tr className="" key={indx}>
                  <td className="bg-[#262C33] py-2 px-2">
                    <p>{el.name}</p>
                  </td>
                  <td className="bg-[#262C33] text-center">?</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row items-center gap-3 m-auto">
        <p>Powered by</p>
        <LazyLoadImage className="max-w-[100px]" src={chainlink.src} />
        <p>
          <a
            className="text-[#1C84FE] uppercase"
            href="http://"
            target="_blank"
            rel="noreferrer"
          >
            About
          </a>
        </p>
      </div>
    </div>
  );
}
