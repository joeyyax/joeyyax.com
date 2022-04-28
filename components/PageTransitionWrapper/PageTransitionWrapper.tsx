import { useRouter } from "next/router"
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion"

interface Props {
  children: any
}

const PageTransitionWrapper = ({ children }: Props) => {
  const router = useRouter()

  const pageTransitionProps = {
    initial: { y: 0, scale: 0, opacity: 1 },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    exit: { y: 0, scale: 1, opacity: 1 },
  }

  const isPageTransitioning = (status) => {
    const body = document.getElementsByTagName("body")[0]

    const isAnimatingClass = "page-transition--in-progress"
    const notAnimatingClass = "page-transition--complete"

    if (status) {
      body.classList.add(isAnimatingClass)
      body.classList.remove(notAnimatingClass)
    } else {
      body.classList.add(notAnimatingClass)
      body.classList.remove(isAnimatingClass)
    }
  }

  const onAnimationStart = () => {
    isPageTransitioning(true)
  }

  const onAnimationComplete = () => {
    isPageTransitioning(false)
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <LazyMotion features={domAnimation}>
        <m.main
          key={router.pathname}
          id="main"
          variants={pageTransitionProps}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationStart={onAnimationStart}
          onAnimationComplete={onAnimationComplete}
        >
          {children}
        </m.main>
      </LazyMotion>
    </AnimatePresence>
  )
}

export default PageTransitionWrapper
