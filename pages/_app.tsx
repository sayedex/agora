import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { client } from "../utils/providerweb3";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
// import { ApolloProvider } from '@apollo/react-hooks';
import 'react-toastify/dist/ReactToastify.css';

import store from "../store/store";
import { Provider } from "react-redux";
import Layout from "../Layout/layout";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
 
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <Provider store={store}>
         
            <Layout pathname={pathname}>
            <ToastContainer />
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

//? Project output path: /home/sayedex/Desktop/ALL FOLDER/Sayedweb/sayedexdevs/sanity
