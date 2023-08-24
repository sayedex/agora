import React from "react";

type AttributesData = {
  [key: string]: number;
};

interface Props {
  attributes: AttributesData;
}

const AttributesComponent: React.FC<Props> = ({ attributes }) => {
  return (
    <table className="w-10/12 m-auto border-separate border-spacing-2 pt-3	">
      <tbody className="">
        {Object.keys(attributes).map((attributeName, index) => (
          <tr className="" key={index}>
            <td className="bg-[#262C33] py-2 px-2">
              <p style={{
                width:`${attributes[attributeName]}%`,
                background:`${attributes[attributeName] != 0? "linear-gradient(109.55deg, #21B5FF 0%, #FF00B2 100%)":""}`
                
              }}  className= "px-2">{attributeName}</p>
            </td>
            <td className="bg-[#262C33] text-center">
      {attributes[attributeName]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttributesComponent;
