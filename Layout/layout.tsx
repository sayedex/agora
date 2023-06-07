import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { useEffect } from "react";
//wallet slice
import { setRender } from "../store/walletSlice";
//components..
import { Header } from "../components/Header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";

import { getuserlogin, getuserMe } from "../store/reducers/userlogin";
import { getproductALL } from "../store/reducers/product";
import Footer from "../components/Footer/Footer";
const Layout = (props: any) => {
  const {issignIn} = useAppSelector((state)=>state.user);
  const dispatch = useAppdispatch();
  const path = props.pathname;
  const hideHeader = path.startsWith("/admin");

  useEffect(() => {
    dispatch(getuserMe());
  }, [issignIn]);

  useEffect(()=>{
    dispatch(getproductALL());
  },[])

  return (
    <>
{ hideHeader? <div className={`flex relative bg-gray-800 h-screen`}>
     <Sidebar /> 
      {props.children}
    </div>: <div className={`relative bg-[#13181D]`}>
      <Header />
      {props.children}
      <Footer />
    </div>}

    </>

  );
};

export default Layout;
