import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  const onAnimationStart = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("page-transition--in-progress");
    body.classList.remove("page-transition--complete");
  };

  const onAnimationComplete = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("page-transition--in-progress");
    body.classList.add("page-transition--complete");
  };

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <LazyMotion features={domAnimation}>
          <m.main
            key={router.pathname}
            layout
            id="main"
            initial={{ y: 100, scale: 1, opacity: 0 }}
            animate={{
              y: 0,
              scale: 1,
              opacity: 1,
            }}
            exit={{ y: 0, scale: 1, opacity: 1 }}
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
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
