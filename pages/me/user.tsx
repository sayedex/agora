import React, { useRef } from "react";
import { Ubutton } from "../../components/user/Ubutton";
import { Userdeposit } from "../../components/Popup/Userdeposit";
import { BalanceToken } from "../../components/user/Balance";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { getuserlogin, getuserMe } from "../../store/reducers/userlogin";
import NotConneted from "../../components/user/NotConneted";
import { useAccount } from "wagmi";
type Props = {};

function User({}: Props) {
  const dispatch = useAppdispatch();
  const {address} = useAccount()
  const { user, isActive,issignIn } = useAppSelector((state) => state.user);
  const userDepositmodel = useRef<{
    openPopup: () => void;
    closePopup: () => void;
  }>(null);

  const ShowDepositmodel = () => {
    userDepositmodel.current?.openPopup();
  };

  const reloadUserbalance = () => {
    if(address){
      dispatch(getuserMe({ wallet: address }));
    }
   
  };

  return (
    <div className="h-screen w-full max-w-7xl m-auto ">
      <Userdeposit ref={userDepositmodel} />
      {/* header */}
      <div className="relative">
        <div className="flex flex-wrap items-center w-full justify-between p-5 gap-3 ">
          <div>
            <h1 className="text-4xl text-[#1C84FE] font-extrabold uppercase">
              My <span className="text-white">credit</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Ubutton name="Refresh Balances" onClick={reloadUserbalance} />
            <Ubutton name="Deposit Credit" onClick={ShowDepositmodel} />
          </div>
        </div>

        <div className="bg_btn_gr w-full h-[5px] absolute bottom-0"></div>
      </div>
      {/* header */}

      {/* balance */}
   {isActive && address?   <div>
        {user?.balances.map((e, index) => {
      
          return (
            <BalanceToken key={index} name={e.token?.name} value={e.amount} />
          );
        })}
      </div>:<NotConneted info="Connet your wallet to view all balance"/>}
      {/* balance */}

      {/* Deposit info */}
      {/* <div className="p-3">
        <p className="text-center">
          AGORA digital collectibles can be purchased with deposited credit.
          <br />
          We accept $KRED, USDC, USDT and BUSD.
        </p>
      </div> */}
      {/* Deposit info */}
    </div>
  );
}

export default User;
