import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import Head from "next/head"
import Script from "next/script"
import { AnimatePresence } from "framer-motion"

import Navbar from "components/Navbar/Navbar"
const Footer = dynamic(() => import("components/Footer/Footer"))

import "../styles/globals.css"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        {/* <link key="favicon" rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
        ket="apple-touch-icon"
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          key="favicon-32"
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link

          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link key="safari-pinned-tab" rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" /> */}
      </Head>
      {process.env.NODE_ENV == "production" && (
        <Script
          async
          defer
          data-website-id="cdd4b521-137c-439f-9196-cb2b88da4fae"
          src="https://analytics.joeyyax.com/umami.js"
        />
      )}
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <div id="main">
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
