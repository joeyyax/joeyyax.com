import Link from "next/link";
import classNames from "classnames";
import styles from "./Button.module.css";

const Hero = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className={classNames("btn", styles.btn)}>{children}</a>
    </Link>
  );
};

export default Hero;
