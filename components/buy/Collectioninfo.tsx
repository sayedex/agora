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
import { useAccount } from "wagmi";
import { getuserMe } from "../../store/reducers/userlogin";
import { getupdateinfo } from "../../store/reducers/updateproduct";
import useNFTMetadata from "../../hooks/regen/Nftmetadata";
import useLastGenerationTime from "../../hooks/regen/useLastGenerationTime";

type Props = {
  product: product;
  id: any;
  tokenid?: any;
  Isregen?: Boolean;
};

export function Collectioninfo({ product, id, Isregen, tokenid }: Props) {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppdispatch();
  const { address } = useAccount();
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
    regen,
    tokenId,
  } = product;

  //this section will be responsible for regen page
  const paymentToken = Isregen ? regen : paymentTokens;

  console.log(regen);
  
  const [RegenTime, setRegenTime] = useState(false);

  // hook for getting nft metadata for regen
  const { metadata ,fetchNFTMetadata} = useNFTMetadata(tokenid, RegenTime);
  const {
    lastGenerationTime,
    loading: GenerationTimeLoading,
    countdown,
    regenEnable,
    fetchLastGenerationTime
  } = useLastGenerationTime(tokenid, RegenTime);


  //payment token ->
  const [preselectedToken, setPreselectedToken] = useState({
    name: "",
    _id: "",
    price: 0,
  });

  //reload user balance
  const reloadUserbalance = () => {
    if (address) {
      dispatch(getuserMe({ wallet: address }));
      UpdateState();
    }
  };

  //Update product state
  const UpdateState = () => {
    if (typeof id == "string") {
      dispatch(
        getupdateinfo({
          productid: id,
        })
      );
    }
  };

  //handleTokenSelection
  const handleTokenSelection = (event: any) => {
    const selectedTokenId = event.target.value;
    const selectedToken: any = paymentToken?.find(
      (token: any) => token.id === selectedTokenId
    );
    setPreselectedToken({
      name: selectedToken.name,
      _id: selectedToken.id,
      price: selectedToken.price,
    });
  };

  // use Effect for set inital token
  useEffect(() => {
    if (Isregen) {
      if (paymentToken != undefined) {
        setPreselectedToken({
          name: regen[0].name,
          _id: regen[0].id,
          price: regen[0].price,
        });
      }
    } else {
      if (paymentTokens != undefined) {
        setPreselectedToken({
          name: paymentTokens[0].name,
          _id: paymentTokens[0].id,
          price: paymentTokens[0].price,
        });
      }
    }
  }, [paymentTokens, regen]);

  const regenNFT = async () => {
    if (!user) return;

    const userTokenBalance = user.balances.find(
      (balance: any) => balance.token._id.toString() === preselectedToken._id
    );

    if (
      userTokenBalance?.amount &&
      userTokenBalance?.amount > preselectedToken.price
    ) {
      setbuyloading(true);
      const data = {
        _tokenId: tokenid,
        paymentid: preselectedToken._id,
        amount: 1,
        productid,
      };
      const response = userService
        .regen(data)
        .then((e) => {
          setbuyloading(false);
          reloadUserbalance();
          console.log("done");
          toast.success(`Regen processing Data will be updated`, {
            position: "bottom-right",
          });
          // Set RegenTime to true when the regen is done
          setRegenTime(true);

          // Automatically reset RegenTime to false after 15 minutes
          setTimeout(() => {
               // if its done then refetch the last timestamp..
            fetchLastGenerationTime()
            setRegenTime(false);
            fetchNFTMetadata();
          }, .5 * 60 * 1000); // 30s


        })
        .catch((e) => {
          setbuyloading(false);
          console.log(e);
        });
    } else {
      toast.warning(`Insufficient balance to regen the nft`, {
        position: "bottom-right",
      });
    }
  };

  const handlebuy = () => {
    if (!user) return;
    const userTokenBalance = user.balances.find(
      (balance: any) => balance.token._id.toString() === preselectedToken._id
    );

    if (
      userTokenBalance?.amount &&
      userTokenBalance?.amount > preselectedToken.price
    ) {
      setbuyloading(true);
      const data = {
        tokenId,
        paymentid: preselectedToken._id,
        amount: 1,
        productid,
      };
      const response = userService
        .Buynft(data)
        .then((e) => {
          setbuyloading(false);
          reloadUserbalance();
          console.log("done");
          toast.success(`NFT brought successfully`, {
            position: "bottom-right",
          });
        })
        .catch((e) => {
          setbuyloading(false);
          console.log(e);
        });
    } else {
      toast.warning(`Insufficient balance to buy the product`, {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    console.log(buyloading, "asas");
  }, [buyloading]);

  const urlToShare = window.location.href;
  const rarityText = String(rarity).replace(/\s/g, "");
  const secretRareColor = RareColor[rarityText as keyof typeof RareColor];

  return (
    <div className="flex-1 flex flex-col gap-y-5">
      {/* titile */}
      <div className="flex flex-rows justify-between relative pb-3">
        <h2 className="text-3xl font-extrabold">
          <span className="text-[#1C84FE]">{`JED'S JOURNEY`}</span> COLLECTION
        </h2>

        <div className="flex flex-row items-center gap-1">
          {collectionshare.map((e, index) => {
            return (
              <a
                key={index}
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
        <h2 className="text-4xl font-extrabold text-white">{name}</h2>
        <div className="w-fit">
          <p
            style={{ backgroundColor: secretRareColor }}
            className={` px-[5px] text-black`}
          >
            {rarity}
          </p>
        </div>
      </div>

      {/* nft-detail-name */}

      {/* token Price option */}
      <div className="flex flex-row items-center gap-3">
        <div className="pricecurrency-wrapper">
          <select
            className="bg-[#2e2e2e] px-1 py-3 border-none pb-[1px] text-lg mb-[3px] uppercase "
            value={preselectedToken.name}
            onChange={handleTokenSelection}
          >
            {paymentToken?.map((token: any, indx) => (
              <option className="py-3" key={indx} value={token.id}>
                {token.symbol}
              </option>
            ))}
          </select>
        </div>
        <h3 className="text-2xl font-extrabold">{preselectedToken.price}</h3>
      </div>
      {/* token Price option */}

      {/* buy now */}
      <div className="pt-10 flex flex-col gap-y-3">
        <p>{minted} minted</p>
        {
          RegenTime && <p>Regen processing..</p>
        }
      { !RegenTime && <p>{countdown}</p>}

        {Isregen ? (
          <button
            onClick={() => regenNFT()}
            disabled={buyloading || regenEnable }
            className=" text-sm  w-fit
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap uppercase  bg_btn_gr"
          >
            <div className="bg-[#13181D] hover:bg-white hover:text-black px-6 py-2  m-[2px]">
              {buyloading ? "loading.." : "Regen attributes"}
            </div>
          </button>
        ) : (
          <button
            onClick={() => handlebuy()}
            disabled={buyloading}
            className=" text-sm  w-fit
          font-semibold font-Montserrat tracking-[2px] text-white whitespace-nowrap uppercase  bg_btn_gr"
          >
            <div className="bg-[#13181D] hover:bg-white hover:text-black px-6 py-2  m-[2px]">
              {buyloading ? "Buying.." : "Buy Now"}
            </div>
          </button>
        )}
      </div>
      {/* buy now */}
      {/* Description */}
      <Description description={description} />
      {/* Description */}
      {/* Attributes */}
      <Attributes metadata={metadata} Isregen={Isregen} />
      {/* Attributes */}

      {/* traits */}
      <Nftboost metadata={metadata} Isregen={Isregen} />
      {/* traits */}
      {/* static content */}
      <Coming />
      {/* static content */}
    </div>
  );
}
