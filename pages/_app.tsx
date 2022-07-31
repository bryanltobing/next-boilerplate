import Head from "next/head";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { wrapper } from "@Redux";

import { createEmotionCache, theme } from "@Definitions";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={createEmotionCache()}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default wrapper.withRedux(MyApp);
