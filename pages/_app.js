import dynamic from "next/dynamic"
import GoogleTagManager from "lib/GoogleTagManager"
import PageTransitionWrapper from "components/PageTransitionWrapper/PageTransitionWrapper"

import Navbar from "components/Navbar/Navbar"
const Footer = dynamic(() => import("components/Footer/Footer"))

import "../styles/globals.css"

function App({ Component, pageProps }) {
  return (
    <>
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
