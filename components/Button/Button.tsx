import Link from "next/link"
import classNames from "classnames/dedupe"
import { twMerge } from "tailwind-merge"
import styles from "./Button.module.css"

type Theme = "primary" | "secondary" | "light" | "dark"

interface Props {
  href: string
  onClick?: Function
  theme?: Theme
  lg?: boolean
  fill?: boolean
  className?: string
  children: any
}

const Button = ({
  href = "/",
  onClick,
  theme,
  lg,
  fill = false,
  className,
  children,
}: Props) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  const classes = twMerge(
    classNames(
      "btn",
      styles.btn,
      theme && styles[theme],
      lg && styles.lg,
      fill && styles.fill,
      className
    )
  )

  return (
    <Link href={href} passHref>
      <a className={classes} onClick={handleClick}>
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default Button
