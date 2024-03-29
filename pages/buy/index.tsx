import React, { useEffect } from "react";
import { CollectionImage } from "../../components/buy/Collectionimage";
import { Collectioninfo } from "../../components/buy/Collectioninfo";
import { useAppSelector, useAppdispatch } from "../../hooks/redux";
import { useRouter } from "next/router";
import { getupdateinfo } from "../../store/reducers/updateproduct";
import LoadSpinner from "../../components/Loading/Load";

type Props = {};
function Buynft({}: Props) {
  const dispath = useAppdispatch();
  const {product}=useAppSelector((state)=>state.product);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

      dispath(
        getupdateinfo({
          productid: id,
        })
      );
  
  }, [dispath, id]);

  return (
    <div className="max-w-7xl mx-auto relative">
      <div className="p-4 md:p-10">
      {
        product?  <div className="flex flex-col md:flex-row gap-10 relative mb-6">
        <CollectionImage imageUrl={product.imgUrl} />
        <Collectioninfo product={product} id={id}/>
      </div>:<LoadSpinner/>
      } 
      </div>
    </div>
  );
}

export default Buynft;
