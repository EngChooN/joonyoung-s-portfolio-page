import "antd/dist/antd.css";
import "../styles/globals.css";

import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import { RecoilRoot } from "recoil";

import { PortfolioProvider } from "../src/components/commons/context/context";
import { prefix } from "../config/config";

function MyApp({ Component, pageProps }: any) {
  return (
    // @ts-ignore
    <PortfolioProvider value={{ prefix }}>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </PortfolioProvider>
  );
}

export default MyApp;
