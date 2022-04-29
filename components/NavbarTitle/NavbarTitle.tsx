import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import classNames from "classnames"

interface Props {
  className?: string
}

const NavTitle = ({ className }: Props) => {
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState(null)
  const [showPageTitle, setShowPageTitle] = useState(false)

  useEffect(() => {
    const title = document.querySelector("h1")
    const navbarHeight = document.querySelector("#navbar").clientHeight
    const titleOffset = title
      ? title.offsetTop + title.clientHeight + navbarHeight
      : 0

    if (title) {
      setPageTitle(title.innerText)
    }

    // show page title when scrolling past it
    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset // window.pageYOffset
      setShowPageTitle(scrollY > titleOffset ? true : false)
    })

    // remove efent listener on unmount
    return () => {
      setPageTitle(null)
      window.removeEventListener("scroll", () => {
        setShowPageTitle(false)
      })
    }
  }, [router.asPath])

  return (
    <AnimatePresence>
      {showPageTitle && (
        <motion.div
          initial={{ opacity: 0, y: "200%" }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: "200%", transition: { duration: 0.5 } }}
          className={classNames(
            "flex grow pl-6 items-center justify-start align-self-start",
            "border-l-4 border-action-base dark:border-slate-900",
            "text-2xl font-bold text-slate-800 dark:text-slate-900",
            className
          )}
        >
          {pageTitle}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NavTitle
