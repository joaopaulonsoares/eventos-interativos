import { ChakraProvider } from "@chakra-ui/react"
import { GlobalStyle } from '../styles/global';
import { AuthContextProvider } from '../contexts/AuthContext';
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <div><Toaster/></div>
        <Component {...pageProps} />
      </ChakraProvider>
        <GlobalStyle />
    </AuthContextProvider>
    );
}
export default MyApp
