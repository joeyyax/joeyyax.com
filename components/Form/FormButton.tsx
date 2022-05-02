import classNames from "classnames"
import { twMerge } from "tailwind-merge"
import styles from "components/Button/Button.module.css"

type Theme = "primary" | "secondary" | "light" | "dark"

interface Props {
  onClick?: Function
  theme?: Theme
  lg?: boolean
  disabled?: boolean
  className?: string
  children: any
}

const FormButton = ({
  onClick,
  theme,
  lg,
  disabled = false,
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
      className
    )
  )

  return (
    <button
      type="submit"
      className={classes}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{children}</span>
    </button>
  )
}

export default FormButton
