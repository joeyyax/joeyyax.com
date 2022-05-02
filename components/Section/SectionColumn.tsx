import { Ref, forwardRef } from "react"
import classNames from "classnames/dedupe"
import { twMerge } from "tailwind-merge"
import { motion, Variants } from "framer-motion"

interface Props {
  id?: string
  className?: string
  center?: boolean
  padding?: "none" | "sm" | "md" | "lg"
  gap?: "none" | "sm" | "md" | "lg"
  animationVariants?: Variants
  children: any
  [key: string]: any
}

const SectionColumn = (
  {
    id,
    name,
    className,
    center = false,
    padding = "sm",
    gap = "sm",
    animationVariants,
    children,
    ...props
  }: Props,
  ref: Ref<HTMLDivElement>
) => {
  const classes = twMerge(
    classNames(
      "flex flex-col w-full",
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
    </motion.div>
  )
}

export default forwardRef(SectionColumn)
