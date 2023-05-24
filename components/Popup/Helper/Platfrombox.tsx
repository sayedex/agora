import React from 'react';

interface DualTitleImageProps {
  title1: string;
  title2: string;
  imageSrc: string;
}

export const DualTitleImage: React.FC<DualTitleImageProps> = ({
  title1,
  title2,
  imageSrc
}) => {
  return (
    <div className='flex flex-col gap-y-5 p-20'>
    <img src={imageSrc} alt="Image" className='max-w-[389px] m-auto'/>
      <p className='text-center'>{title1}</p>
      <h2 className='text-3xl  font-extrabold text-center bg_gr text-transparent bg-clip-text tracking-[1px]'>{title2}</h2>
  
    </div>
  );
};
