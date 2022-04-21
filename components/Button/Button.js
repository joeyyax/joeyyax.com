import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ href, onClick, children }) => {
  return (
    <Link href={href} passHref>
      <a className={classNames("btn", styles.btn)} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  href: "/",
  onClick: undefined,
  children: "",
};

export default Button;
