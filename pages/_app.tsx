import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
