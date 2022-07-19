import "antd/dist/antd.css";
import "../styles/globals.css";

import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
