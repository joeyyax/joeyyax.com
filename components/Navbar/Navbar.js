// import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";
import Branding from "../Branding/Branding";
import Section from "../Section/Section";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Section
      name="navbar"
      type="header"
      className="flex w-full h-16 lg:h-24 items-center border-b lg:border-b-0 border-dotted border-slate-300"
    >
      <Section.Container className="justify-between items-center">
        <Branding />
        <nav className={classNames("nav", styles.nav)}>
          {/* <Link href="/about">
            <a className={classNames("nav-item", styles.navItem)}>About</a>
          </Link> */}
        </nav>
      </Section.Container>
    </Section>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
