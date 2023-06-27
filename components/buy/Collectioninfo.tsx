import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { collectionshare } from "../../config/collection";
import { Description } from "./Description";
import { Attributes } from "./Attributes";
import { Nftboost } from "./Nftboost";
import { Coming } from "./Coming";
import { product } from "../../store/productSlice";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { BuynftUser } from "../../store/reducers/buy";
import { RareColor } from "../../config";
import { handleNotification } from "../../utils/Notification";
import userService from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";
type Props = {
  product: product;
};

export function Collectioninfo({ product }: Props) {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppdispatch();
  const [buyloading, setbuyloading] = useState(false);
  const {
    description,
    _id,
    name,
    productid,
    imgUrl,
    rarity,
    series,
    maxmint,
    minted,
    Type,
    mint,
    character,
    paymentTokens,
  } = product;
  const [preselectedToken, setPreselectedToken] = useState({
    name: "",
    _id: "",
    price: 0,
  });

  //handleTokenSelection
  const handleTokenSelection = (event: any) => {
    const selectedTokenId = event.target.value;
    const selectedToken: any = paymentTokens?.find(
      (token: any) => token.id === selectedTokenId
    );
    setPreselectedToken({
      name: selectedToken.name,
      _id: selectedToken.id,
      price: selectedToken.price,
    });
  };

  useEffect(() => {
    if (paymentTokens != undefined) {
      setPreselectedToken({
        name: paymentTokens[0].name,
        _id: paymentTokens[0].id,
        price: paymentTokens[0].price,
      });
    }
  }, [paymentTokens]);

  const handlebuy = () => {
    if (!user ) return;
    const userTokenBalance = user.balances.find(
      (balance: any) => balance.token._id.toString() === preselectedToken._id
    );

    if (
      userTokenBalance?.amount &&
      userTokenBalance?.amount > preselectedToken.price
    ) {
      setbuyloading(true);
      const data = {
        productid: productid,
        paymentid: preselectedToken._id,
        amount: 1,
      };
      const response = userService.Buynft(data);
      handleNotification(
        dispatch,
        response,
        "Buy done",
        "buying...",
        "something went wrong"
      );
      setbuyloading(false);
    } else {
      toast.warning(`Insufficient balance to buy the product`, {
        position: "bottom-right",
      });
    }
  };

  const urlToShare = window.location.href;
  const rarityText = String(rarity).replace(/\s/g, "");
  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];

  return (
    <div className="flex-1 flex flex-col gap-y-5">
      {/* titile */}
      <div className="flex flex-rows justify-between relative pb-3">
        <h2 className="text-3xl font-extrabold">
          <span className="text-[#1C84FE]">JED'S JOURNEY</span> COLLECTION
        </h2>

        <div className="flex flex-row items-center gap-1">
          {collectionshare.map((e, index) => {
            return (
              <a
                href={`${e.tweetUrl + urlToShare}`}
                target="_blank"
                rel="noreferrer"
              >
                <LazyLoadImage src={e.icon} alt={e.name} />
              </a>
            );
          })}
        </div>
        <div className="bg_btn_gr absolute bottom-0 w-full h-1 "></div>
      </div>
      {/* titile */}
      {/* nft-detail-name */}

      <div className="pt-5 flex flex-col gap-y-2">
        <p className="globaldarktext uppercase">name</p>
        <h2 className="text-3xl font-extrabold text-white">{name}</h2>
        <div className="w-fit">
          <p className={`bg-[${secretRareColor}] px-[5px] text-black`}>
            {rarity}
          </p>
        </div>
      </div>

      {/* nft-detail-name */}

      {/* token Price option */}
      <div className="flex flex-row items-center gap-3">
        <select
          className="bg-[#13181D] px-1 py-3 border rounded-lg"
          value={preselectedToken.name}
          onChange={handleTokenSelection}
        >
          {paymentTokens?.map((token: any, indx) => (
            <option className="py-3" key={indx} value={token.id}>
              {token.symbol}
            </option>
          ))}
        </select>
        <h3 className="text-2xl font-extrabold">{preselectedToken.price}</h3>
      </div>
      {/* token Price option */}

      {/* buy now */}
      <div className="pt-10 flex flex-col gap-y-3">
        <p>{minted} minted</p>
        <button
          onClick={() => handlebuy()}
          disabled={buyloading}
          className=" text-sm  w-fit
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap uppercase  bg_btn_gr"
        >
          <div className="bg-[#13181D] hover:bg-white hover:text-black px-6 py-2  m-[2px]">
            Buy now
          </div>
        </button>
      </div>
      {/* buy now */}
      {/* Description */}
      <Description description={description} />
      {/* Description */}
      {/* Attributes */}
      <Attributes />
      {/* Attributes */}

      {/* traits */}
      <Nftboost />
      {/* traits */}
      {/* static content */}
      <Coming />
      {/* static content */}
    </div>
  );
}
