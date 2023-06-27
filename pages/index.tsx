import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useEffect } from "react";
import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { Homesection } from "../components/Home/Homesection";
import { Collectioncard } from "../components/collectioncard/Collectioncard";
import { Featured } from "../components/Featured/Featured";

//lazy load
import { Boxlazyload } from "../components/lazyload/Boxlazyload";

export default function Home() {
  const { loading, allproduct,productfeatured } = useAppSelector((state) => state.product);
  const categories = allproduct.map((e) => e.series);
  const uniqueCategories = Array.from(new Set(categories));


  return (
    <div>
      <Homesection />

      <div>
        {loading == 'idle' || loading == 'pending' ? (
          <Boxlazyload />
        ) : (
          uniqueCategories.map((e, index) => {
            return <Collectioncard data={allproduct} cetagory={e} />;
          })
        )}
      </div>

      <div>
        <Featured data={productfeatured} cetagory="BATTLE READY" />
      </div>
    </div>
  );
}
