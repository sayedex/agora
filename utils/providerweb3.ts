import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { bsc,bscTestnet,goerli ,arbitrum,polygonMumbai, polygon} from "wagmi/chains";
import { ethers } from "ethers";


export const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_ALCHEMY_RPC)
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
const chains = [polygon];

export const client = createClient(
    getDefaultClient({
      appName: "minter",
      alchemyId,
      chains
    }),
  );

// Pass client to React Context Provider