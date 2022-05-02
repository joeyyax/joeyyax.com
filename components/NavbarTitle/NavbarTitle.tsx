import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import classNames from "classnames"

interface Props {
  className?: string
}

const NavTitle = ({ className }: Props) => {
  const router = useRouter()
  const maxLength = 40
  const [pageTitle, setPageTitle] = useState<string>(null)
  const [showPageTitle, setShowPageTitle] = useState<boolean>(false)

  useEffect(() => {
    const title = document.querySelector<HTMLHeadingElement>("h1")

    if (title?.dataset?.navbarTitleIgnore == "true") {
      return
    }

    // const navbarHeight = document.querySelector("#navbar").clientHeight
    const titleOffset: number = title ? title.offsetTop + title.clientHeight : 0

    if (title) {
      let titleText = title.innerText

      // if title is too long, trim it
      if (titleText.length > maxLength) {
        titleText = titleText.substring(0, maxLength) + "..."
      }

      setPageTitle(titleText)
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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: 32, transition: { duration: 0.5 } }}
          className={classNames(
            "flex grow pl-6 items-center justify-start align-self-start",
            "border-l-4 border-action-base dark:border-slate-900",
            "text-2xl font-bold text-slate-800 dark:text-white dark:text-opacity-70",
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
