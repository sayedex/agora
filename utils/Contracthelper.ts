import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { provider } from "./providerweb3";
import erc1155 from "../config/ABI/erc1155.json"

//return nft contract instance
export const getNftContractinstance = () => {
    var contract = new Contract(
      "0x0b60eab12b8d2b4bf3be0eaa11c5ede360d4527a",
      erc1155.abi,
      provider
    );
    return contract;
  };