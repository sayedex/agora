import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { getNFT } from "../../store/reducers/userlogin";
import { Nft } from "../../components/user/Nft";
import NotConneted from "../../components/user/NotConneted";
import LoadSpinner from "../../components/Loading/Load";
type Props = {};

function Yournft({}: Props) {
  const { nftloading, nftBalance, issignIn, isActive } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppdispatch();
  const { address } = useAccount();

  useEffect(() => {
    if (address) {
      // get...
      dispatch(getNFT());
    }
  }, [address,isActive]);

  console.log(isActive);
  

  return (
    <div className="min-h-screen  max-w-7xl m-auto py-10 px-3">
      <div>
        <h1 className="text-4xl text-[#1C84FE] font-extrabold uppercase py-10">
          My <span className="text-white">AGORA</span>
        </h1>
      </div>

      {isActive ? (
        <div className="flex flex-col md:flex-row items-centerm-auto">
          {nftloading == "pending" || nftloading=='idle' ? (
            <LoadSpinner />
          ) : (
            <div>
              {nftBalance!=null && nftBalance.length == 0
                ? "You don't have any nft!"
                : nftBalance?.map((e, index) => {
                    return <Nft key={index} nft={e} />;
                  })}
            </div>
          )}
        </div>
      ) : (
        <NotConneted info="LOG IN WITH YOUR WALLET TO VIEW YOUR AGORA DIGITAL COLLECTIBLES." />
      )}
    </div>
  );
}

export default Yournft;
