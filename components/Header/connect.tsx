import { ConnectKitButton } from "connectkit";

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName }) => {
        return (
          <button className=" rounded-xl text-sm 
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  bg-gradient-to-r from-blue-500 to-pink-500" onClick={show} >
           <div className="bg-[#13181D] px-6 py-2 rounded-xl m-[2px]">
           {isConnected ? address?.slice(1,5)+"..."+ address?.slice(-3) : "Connect"}
           </div>
          </button>
          
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