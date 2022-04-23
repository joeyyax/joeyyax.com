import PropTypes from "prop-types"
import Link from "next/link"
import classNames from "classnames"
import styles from "./Button.module.css"

const Button = ({ href, onClick, logEvent, children }) => {
  const handleClick = (e) => {
    if (logEvent) {
      window?.dataLayer?.push({
        event: "event",
        eventProps: {
          category: logEvent.category || "Button",
          action: logEvent.action || "Click",
          label: logEvent.label || "",
          value: logEvent.value || 0,
        },
      })
    }

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link href={href} passHref>
      <a className={classNames("btn", styles.btn)} onClick={handleClick}>
        {children}
      </a>
    </Link>
  )
}

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  logEvent: PropTypes.shape({
    category: PropTypes.string,
    action: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.number,
  }),
  children: PropTypes.node,
}

Button.defaultProps = {
  href: "/",
  onClick: undefined,
  logEvent: false,
  children: "",
}

export default Button
