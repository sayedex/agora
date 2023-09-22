import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { provider } from "./providerweb3";
import erc1155 from "../config/ABI/erc1155.json"

//return nft contract instance
export const getNftContractinstance = () => {
  const contract_address = process.env.NEXT_PUBLIC_NFT_CONTRACT || "0x0b60eab12b8d2b4bf3be0eaa11c5ede360d4527a"
    var contract = new Contract(
      contract_address,
      erc1155.abi,
      provider
    );
    return contract;
  };