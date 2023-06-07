import React, { ReactNode } from 'react';

interface ButtonProps {
  name:string,
  onClick?: () => void;
}

export const Ubutton: React.FC<ButtonProps> = ({name , onClick }) => {
  return (
    <button
      className={`text-sm font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap bg_btn_gr`}
      onClick={onClick}
    >
      <div className="bg-[#13181D] px-6 py-2 m-[2px]">{name}</div>
    </button>
  );
};


