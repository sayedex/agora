import React from "react";

type Props = {
  name?: string | undefined ;
  type: string;
  value: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Inputhelper({ name, type, onChange, value }: Props) {
  return (
    <div>
      <label className='capitalize text-black'>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="h-[40px] rounded-lg text-black  border w-full border-[#000] p-1"
      />
    </div>
  );
}
