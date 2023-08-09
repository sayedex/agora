import { ConnectKitButton } from "connectkit";
import { useAccount ,useSignMessage} from "wagmi";
import { useAppSelector,useAppdispatch } from "../../hooks/redux";
import { setwallet } from "../../store/userSlice";
import { ethers } from "ethers";

import { getuserlogin } from "../../store/reducers/userlogin";
import { SiweMessage } from 'siwe'


export const ConnectButton = () => {
  //dispath 
  const dispath  = useAppdispatch();
  // state 
  const {isActive,issignIn} = useAppSelector((state)=>state.user)
  const  {address}  =useAccount();
  const { signMessageAsync, signMessage } = useSignMessage();

  const Signin = async()=>{
    if(!address) return;
    const nonce = await fetch("/api/nonce")
    const nonceRes = await nonce.text();
    const res = await signMessageAsync({
      message: nonceRes
    });

    const data = {
      wallet:address,
      signature:res,
      nonce:nonceRes
    };

  await dispath(getuserlogin({info:data}));
  } 

  

  //login to DB...
  const Login = async()=>{
    try{
      const nonce = await fetch("/api/nonce");
    }catch(error){
      console.log(error);
      
    }
   
  
    
  }






  
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
        <div>
        {!isConnected && <button className=" rounded-xl text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  bg-gradient-to-r from-blue-500 to-pink-500" onClick={show} >
           <div className="bg-[#13181D] px-6 py-2 rounded-xl m-[2px]">
           {isConnected && address ? address.slice(1,5)+"..."+ address?.slice(-3) : "Connect"}
           </div>
          </button>}

          {isConnected && <button  className=" rounded-xl text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  bg-gradient-to-r from-blue-500 to-pink-500" onClick={isActive?show:Signin} >
           <div className="bg-[#13181D] px-6 py-2 rounded-xl m-[2px]">
           { isActive && address ? address?.slice(1,5)+"..."+ address?.slice(-3) : "Login"}
           </div>
          </button>}


        </div>
          
        );
      }}
    </ConnectKitButton.Custom>
  );
};








export const ConnectButtonwagmi= () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <button className="btn" onClick={show} >
        Connect
          </button>
          
        );
      }}
    </ConnectKitButton.Custom>
  );
};