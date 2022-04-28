import Link from "next/link"
import classNames from "classnames"
import styles from "./Button.module.css"

type Theme = "primary" | "secondary" | "light" | "dark"

interface Props {
  href: string
  onClick?: Function
  theme?: Theme
  lg?: boolean
  className?: string
  children: any
}

const Button = ({
  href = "/",
  onClick,
  theme,
  lg,
  className,
  children,
}: Props) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} passHref>
      <a
        className={classNames(
          "btn",
          styles.btn,
          theme && styles[theme],
          lg && styles.lg,
          className
        )}
        onClick={handleClick}
      >
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default Button
