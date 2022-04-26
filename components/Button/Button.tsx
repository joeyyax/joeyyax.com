import Link from "next/link"
import classNames from "classnames"
import styles from "./Button.module.css"

interface Props {
  href: string
  onClick?: Function
  className?: string
  children: any
}

const Button = ({ href = "/", onClick, className, children }: Props) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} passHref>
      <a
        className={classNames("btn", styles.btn, className)}
        onClick={handleClick}
      >
        <span>{children}</span>
      </a>
    </Link>
  )
}

export default Button
