import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
interface CollectionImageProps {
  imageUrl: string;
}

export const CollectionImage: React.FC<CollectionImageProps> = ({
  imageUrl,
}) => {
  return (
    <div className="md:sticky top-[92px] self-start">
      <div className="max-w-[500px] lg:max-w-auto lg:w-[500px]">
      <div>
        <LazyLoadImage src={imageUrl} alt="Collection Image" />
      </div>

      <div className="py-10 flex flex-col gap-y-3 pb-10 border-b">
        <p className="text-[#827A8E] font-bold">ART BY</p>
        <p>Jedstar team</p>
        <p>In-house artists</p>
        <p>
          <a href="https://www.jedstar.com"  className="text-[#1C84FE] " target="_blank" rel="noreferrer">
            https://www.jedstar.com
          </a>
        </p>
      </div>
      </div>
    </div>
  );
};
