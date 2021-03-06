import classNames from "classnames/dedupe"
import { twMerge } from "tailwind-merge"
import { motion, Variants } from "framer-motion"

import dynamic from "next/dynamic"
const SectionContainer = dynamic(() => import("./SectionContainer"))
const SectionColumn = dynamic(() => import("./SectionColumn"))

interface Props {
  id?: string
  name?: string
  className?: string
  padding?: "none" | "sm" | "md" | "lg"
  gap?: "none" | "sm" | "md" | "lg"
  animationVariants?: Variants
  children: any
  [key: string]: any
}

const Section = ({
  id,
  name,
  className,
  padding = "none",
  gap = "md",
  animationVariants,
  children,
  ...props
}: Props) => {
  const classes = twMerge(
    classNames(
      name,
      "flex flex-col justify-start w-full px-2",
      padding == "sm" && "section-padding-sm",
      padding == "md" && "section-padding-md",
      padding == "lg" && "section-padding-lg",
      gap == "sm" && "content-gap-sm",
      gap == "md" && "content-gap-md",
      gap == "lg" && "content-gap-lg",
      className
    )
  )

  return (
    <motion.section
      key={id || name}
      id={id}
      className={classes}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.section>
  )
}

Section.Container = SectionContainer
Section.Column = SectionColumn

export default Section
