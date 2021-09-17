import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from '../styles/global';
import { AuthContextProvider } from '../contexts/AuthContext';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
        <GlobalStyle />
    </AuthContextProvider>
    );
}
export default MyApp
