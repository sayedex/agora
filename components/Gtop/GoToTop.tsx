import React,{useState,useEffect} from 'react'
import { FaArrowUp } from "react-icons/fa";
import Topicon from "../../public/icon/top.png";
import Image from 'next/image';
type Props = {}

function GoToTop({}: Props) {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
      let heightToHidden = 20;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }, []);


  return (
    <div className='fixed bottom-12 right-12 z-[101]'>   {isVisible && (
        <div className='cursor-pointer' onClick={goToBtn}>
        <Image width={40} height={40} alt='top' src={Topicon.src} />
        </div>
      )}</div>
  )
}

export default GoToTop