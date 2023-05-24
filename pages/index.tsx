import Head from 'next/head'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useEffect } from 'react'
import {useAppSelector,useAppdispatch} from "../hooks/redux";
import { Homesection } from '../components/Home/Homesection';
import {Collectioncard} from "../components/collectioncard/Collectioncard"
import { Featured } from '../components/Featured/Featured';
export default function  Home (){
 
  const NftData = [
    { name: "NFT 1", price: 10, totalmint: 100, rarity: 1, image: "image1.jpg", cetagory: "Category1" },
    { name: "NFT 2", price: 20, totalmint: 50, rarity: 2, image: "image2.jpg", cetagory: "Category2" },
    { name: "NFT 3", price: 30, totalmint: 200, rarity: 3, image: "image3.jpg", cetagory: "Category1" },
    { name: "NFT 4", price: 15, totalmint: 75, rarity: 1, image: "image4.jpg", cetagory: "Category2" }
  ];
  


  return (
 
<div >
  <Homesection/>
  
<div>
  <Collectioncard data={NftData}  cetagory="BATTLE READY"/>
</div>

<div>
  <Featured data={NftData}  cetagory="BATTLE READY"/>
</div>

</div>

  )
}

