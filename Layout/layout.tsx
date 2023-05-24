
import {useAppSelector,useAppdispatch} from "../hooks/redux"
import { useEffect } from 'react';
//wagmi hook
import { useAccount } from 'wagmi'
//wallet slice 
import {setRender} from "../store/walletSlice"
//components..
import { Header } from '../components/Header/Header';
import { ethers } from "ethers";
import {NFT_CONTRACT} from "../config/index";

import {provider} from "../utils/providerweb3";
import Footer from "../components/Footer/Footer"
const  Layout = (props:any)=> {

  const { address, isConnecting, isDisconnected ,isConnected} = useAccount();
  const dispatch = useAppdispatch();


    useEffect(() => {

     
    }, [])
  



    return (
   <div className="relative bg-[#13181D]   ">
   <Header/>
   {props.children}
   <Footer/>
   </div>
    )
  }
  
  
  export default Layout