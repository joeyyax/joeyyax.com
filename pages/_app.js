import dynamic from "next/dynamic"
import Head from "next/head"
import GoogleTagManager from "lib/GoogleTagManager"
import PageTransitionWrapper from "components/PageTransitionWrapper/PageTransitionWrapper"

import Navbar from "components/Navbar/Navbar"
const Footer = dynamic(() => import("components/Footer/Footer"))

import "../styles/globals.css"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" /> */}
      </Head>
      <GoogleTagManager.Script />
      <Navbar />
      <PageTransitionWrapper>
        <Component {...pageProps} />
      </PageTransitionWrapper>
      <Footer />
    </>
  )
}

export default App
