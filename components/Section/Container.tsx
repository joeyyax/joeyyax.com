import classNames from "classnames"
import { motion, Variants } from "framer-motion"

interface Props {
  className?: string
  animationVariants?: Variants
  children: any
}

const Container = ({ className, animationVariants, children }: Props) => {
  const defaultWidth = "w-full"
  const classes = className?.split(" ")

  // find a class that starts with w-, or min-w
  const widthClass = classes?.find(
    (className) => className.startsWith("w-") || className.startsWith("min-w-")
  )

  return (
    <motion.div
      key="container"
      className={classNames(
        "container flex gap-4 lg:gap-8 p-4 py-12 md:p-12 lg:p-20 rounded-lg relative z-30",
        !widthClass ? defaultWidth : widthClass,
        className
      )}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

export default Container
