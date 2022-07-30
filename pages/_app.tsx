import type { AppProps } from "next/app";

import { wrapper } from "@Redux";

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
