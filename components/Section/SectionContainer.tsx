import { Ref, forwardRef } from "react"
import classNames from "classnames/dedupe"
import { twMerge } from "tailwind-merge"
import { motion, Variants } from "framer-motion"

interface Props {
  className?: string
  stack?: boolean
  center?: boolean
  padding?: "none" | "sm" | "md" | "lg"
  gap?: "none" | "sm" | "md" | "lg"
  animationVariants?: Variants
  children: any
  [key: string]: any
}

const Container = (
  {
    className,
    stack = false,
    center = false,
    padding = "md",
    gap = "md",
    animationVariants,
    children,
    ...props
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  const classes = twMerge(
    classNames(
      "container flex rounded-xl relative z-30 overflow-hidden w-full",
      stack && "flex-col",
      !stack && "flex-col lg:flex-row lg:flex-row",
      center ? "items-center" : "items-stretch",
      padding == "sm" && "content-padding-sm",
      padding == "md" && "content-padding-md",
      padding == "lg" && "content-padding-lg",
      gap == "sm" && "content-gap-sm",
      gap == "md" && "content-gap-md",
      gap == "lg" && "content-gap-lg",
      className
    )
  )

  return (
    <motion.div
      ref={ref}
      key="container"
      className={classes}
      variants={animationVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(Container)
