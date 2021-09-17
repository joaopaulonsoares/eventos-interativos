/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import type { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";
import { ChakraProvider } from "@chakra-ui/react";

import { GlobalStyle } from "../styles/global";
import { AuthContextProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <div>
          <Toaster />
        </div>
        <Component {...pageProps} />
      </ChakraProvider>
      <GlobalStyle />
    </AuthContextProvider>
  );
}
export default MyApp;
