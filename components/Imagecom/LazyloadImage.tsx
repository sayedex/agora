import React, { useEffect, useState } from "react";
import Image from "next/image";
import SkeletonImage from "./SkeletonImage";
type Props = {
  src: string; // Assuming src is a string URL
  height?:number,
  isRound?:boolean
};

function LazyloadImage({ src ,height,isRound}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoad() {
    setImageLoaded(true);
  }

  return (
    <div>
      <Image
        src={src}
        alt="Image"
        width={214}
        height={300}
        style={{
          backgroundColor: "#ffffff ",
          width:imageLoaded?"":"0px"
        }}
        // loading="lazy"
        // placeholder="blur"
        // blurDataURL={placeholder.src}
        className={`w-full h-full ${isRound && "rounded-2xl"}${
          imageLoaded ? " w-full h-[300px]" : "w-[0px] h-[0px]"
        }`}
        onError={(e: any) => {
          e.target.style.display = "none"; // Hide the broken image icon
        }}
        onLoadingComplete={handleImageLoad}
      />
      {!imageLoaded && <SkeletonImage height={height} />}
    </div>
  );
}

export default LazyloadImage;
