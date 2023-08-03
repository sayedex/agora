import { useAppSelector, useAppdispatch } from "../hooks/redux";
import { useEffect, useSyncExternalStore } from "react";
//wallet slice
import { setRender } from "../store/walletSlice";
//components..
import { Header } from "../components/Header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";
import { useAccount } from "wagmi";
import { getuserlogin, getuserMe } from "../store/reducers/userlogin";
import { getproductALL, getfeaturedproduct } from "../store/reducers/product";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
//down to top button
import GoToTop from "../components/Gtop/GoToTop";


//popup..
import Buy from "../components/Popup/Buy";
import PopupforPlatfroms from "../components/Popup/PopupforPlatfroms";
import Userdeposit from "../components/Popup/Userdeposit"
const Layout = (props: any) => {
  const router = useRouter();
  const { issignIn, user } = useAppSelector((state) => state.user);
  const dispatch = useAppdispatch();
  const { address } = useAccount();
  const path = props.pathname;
  const hideHeader = path.startsWith("/admin");

  useEffect(() => {
  
    if (address != undefined) {
      dispatch(getuserMe({ wallet: address }));
    }
  }, [issignIn, address]);

  //hook to check is connet wallet and jwt cokie are valid are not
  useEffect(() => {
   
  }, []);

  useEffect(() => {
    dispatch(getproductALL());
    dispatch(getfeaturedproduct());
  }, []);

  useEffect(() => {
    if (hideHeader) {
      if (user?.role != "admin") {
        // router.push("/")
      }
    }
  }, [user]);

  return (
    <>
  
      <Buy />
      <PopupforPlatfroms/>
      <Userdeposit/>
      { hideHeader ? <div>{
        user?.role=="admin" ?
        <div className={`flex relative bg-[#262C33] h-screen`}>
          <Sidebar />
          { props.children}
        </div>:<h1 className="text-xl text-center p-10">You are not owner!!</h1>
        }
        </div> : (
        <div className={`relative bg-[#13181D]`}>
          <Header />
          <GoToTop />
          {props.children}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
