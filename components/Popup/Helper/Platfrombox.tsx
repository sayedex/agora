import React from 'react';

interface DualTitleImageProps {
  title1: string;
  title2: string;
  imageSrc: string;
  link?:string,
  btnName?:string
}

export const DualTitleImage: React.FC<DualTitleImageProps> = ({
  title1,
  title2,
  imageSrc,
  btnName
}) => {
  return (
    <div className='flex flex-col gap-y-5 p-5 md:p-20'>
    <img src={imageSrc} alt="Image" className='max-w-[150px] md:max-w-[389px] m-auto'/>
      <p className='text-center'>{title1}</p>
      <h2 className='text-3xl  font-extrabold text-center bg_gr text-transparent bg-clip-text tracking-[1px]'>{title2}</h2>
      <a 
            className=" text-sm max-w-[200px] m-auto
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap  cursor-pointer hover:bg-none bg_btn_gr"
          >
            <div className="bg-[#262C33] px-6 py-2  hover:bg-white hover:text-black m-[2px]">{btnName}</div>
          </a>
    </div>
  );
};
