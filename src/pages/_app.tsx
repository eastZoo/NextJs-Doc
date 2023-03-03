import { GlobalStyle } from '@/styles/global-style'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from "@/styles/theme";
import { useRouter } from 'next/router'
import useWindowWidth from '../lib/hooks/useWindowWidth'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isWindowWidth = useWindowWidth();

  return ( 
  <>
    <Head>
      <title>Slack</title>
    </Head>
    <GlobalStyle />
        <ThemeProvider theme={theme}>
          {router.pathname.includes("main") ||
          router.pathname.includes("auth") ? (
            <>
              {/* {isWindowWidth < 769 ? <MobileHeader /> : <Header />} */}

              <Component {...pageProps} />

            </>
          ) : (
            <>
              {/* {isWindowWidth < 769 ? <MobileHeader /> : <Header />} */}
              <Component {...pageProps} />
            </>
          )}
        </ThemeProvider>
 
  </>
  )
}
