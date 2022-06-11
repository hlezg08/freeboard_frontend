import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_BF7fkwFhvj81mFNitZL7ZWOs0PHHvh0",
  authDomain: "lynn-frontend.firebaseapp.com",
  projectId: "lynn-frontend",
  storageBucket: "lynn-frontend.appspot.com",
  messagingSenderId: "324259781515",
  appId: "1:324259781515:web:992a6b6136ee078f906d8e",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles}></Global>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
