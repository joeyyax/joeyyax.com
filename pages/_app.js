import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <LazyMotion features={domAnimation}>
          <m.main
            key={router.pathname}
            id="main"
            initial={{ y: 100, scale: 1, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{ y: 0, scale: 1, opacity: 1 }}
          >
            <Component {...pageProps} />
          </m.main>
        </LazyMotion>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
