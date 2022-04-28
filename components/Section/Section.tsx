import dynamic from "next/dynamic"
import classNames from "classnames"
import { motion, Variants } from "framer-motion"

const Container = dynamic(() => import("./Container"))

interface Props {
  id?: string
  name?: string
  className?: string
  animationVariants?: Variants
  children: any
}

const Section = ({
  id,
  name,
  animationVariants,
  className,
  children,
}: Props) => {
  return (
    <motion.section
      key={id || name}
      id={id}
      className={classNames(
        name,
        "flex justify-center w-full lg:px-4 px-2",
        className
      )}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.section>
  )
}

Section.Container = Container

export default Section
