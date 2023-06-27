import React, { useEffect, useState } from "react";
import { categories, rarity } from "../../../config/index";
import { Inputhelper } from "./helper/Inputhelper";
import { addProduct } from "../../../store/reducers/addproduct";
import {
  getupdateinfo,
  updateProduct,
} from "../../../store/reducers/updateproduct";
import { useAppSelector, useAppdispatch } from "../../../hooks/redux";
import { useRouter } from "next/router";

type Props = {
  mode: "add" | "update";
  id?: string;
};

interface product{
  name: string | undefined;
  productid: string  | undefined;
  description: string  | undefined;
  imgUrl: string  | undefined;
  maxmint: string  | undefined;
  Type: string  | undefined;
  rarity: string  | undefined;
  series: string  | undefined;
  character: string  | undefined;
  mint: string  | undefined;
  value:string  | undefined,
  featured:boolean
}

function add({ mode, id }: Props) {
  const router = useRouter();
  const [inputs, setInputs] = useState<product>({
    name: "",
    productid:"" ,
    description: "",
    imgUrl: "",
    maxmint: "",
    Type: "",
    rarity: "",
    series: "",
    character: "",
    mint: "",
    value: "",
    featured:false
  });
  const dispath = useAppdispatch();
  const { loading, product,addproductLoad } = useAppSelector((state) => state.product);
  const { description,_id,name,productid,imgUrl,rarity:apiratity,series,maxmint,Type,mint,character,USD}  = product || {};

  useEffect(() => {
     if (addproductLoad == "done") {
       router.push("/admin/allproduct");
      }
 }, [addproductLoad]);
 

  useEffect(() => {
    if (mode == "update" && id) {
      console.log("call it1");
      dispath(
        getupdateinfo({
          productId: id,
        })
      );
    }
  }, [dispath, id]);

  useEffect(() => {
    if (mode == "update") {
      setInputs({
        ...inputs,
        name: name,
        productid: productid?.toString(),
        description: description,
        imgUrl: imgUrl,
        maxmint: maxmint?.toString(),
        Type: Type,
        rarity: apiratity,
        series: series,
        character: character,
        mint: mint,
        value:USD?.toString()
      
      });
    }
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const UpdateSellect = (name: string, value: string) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
    if (mode === "add") {
      await  dispath(addProduct({ productData: inputs }));
     // router.push('/admin/allproduct');
    } else if (mode === "update" && id) {
      await dispath(
        updateProduct({
          productId: id,
          productData: inputs,
        })
      );
  
    }
  };

  const handleCheckboxChange = () => {
    setInputs({
      ...inputs,
      featured:!inputs.featured 
    });
  };

  return (
    <div className="max-w-[650px] bg-[#ffffff] m-auto rounded-lg mt-10 p-5">
      <h1 className="text-2xl text-center text-black py-3">{mode} a product</h1>
      <div className="px-4 flex flex-col gap-3">
        <Inputhelper
          name="name"
          type="text"
          value={inputs.name}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="productid"
          type="text"
          value={inputs.productid}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="Type"
          type="text"
          value={inputs.Type}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="description"
          type="text"
          value={inputs.description}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="imgUrl"
          type="text"
          value={inputs.imgUrl}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="value"
          type="number"
          value={inputs.value}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="character"
          type="text"
          value={inputs.character}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="mint"
          type="text"
          value={inputs.mint}
          onChange={handleInputChange}
        />
        <Inputhelper
          name="maxmint"
          type="text"
          value={inputs.maxmint}
          onChange={handleInputChange}
        />
         <label className="text-black flex flex-row gap-3">
        <input
          type="checkbox"
          checked={inputs.featured}
          onChange={handleCheckboxChange}
        />
        Show featured products
      </label>
        <div>
          <label className="capitalize">rarity</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => UpdateSellect("rarity", e.target.value)}
          >
            <option value="">
              {inputs.series ? inputs.rarity : "Choose rarity"}
            </option>
            {rarity.map((cate) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="capitalize">series</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => UpdateSellect("series", e.target.value)}
          >
            <option value="">
              {inputs.series ? inputs.series : "Choose series"}
            </option>
            {categories.map((cate) => (
              <option key={cate} value={cate}>
                {cate}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="py-4 justify-center px-4">
        <button
          onClick={() => handleSubmit()}
          type="button"
          className="text-white w-full uppercase m-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
        >
          {mode == "add" ? "Create" : "Update"}
        </button>
      </div>
    </div>
  );
}

export default add;
