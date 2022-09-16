import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApolloSetting from "../src/components/commons/apollo";
import { RecoilRoot } from "recoil";

function App({ Component, pageProps }: AppProps) {
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

export default App;
