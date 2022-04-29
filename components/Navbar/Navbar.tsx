import Link from "next/link"
import classNames from "classnames"
import NavbarTitle from "components/NavbarTitle/NavbarTitle"
import Branding from "components/Branding/Branding"
import Section from "components/Section/Section"
import Button from "components/Button/Button"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <Section
      id="navbar"
      className={classNames(
        "flex w-full h-20 lg:h-24 items-star z-50 overflow-hidden",
        "sticky top-0 border-b border-slate-100 dark:border-slate-900",
        "bg-white dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70 backdrop-blur"
      )}
    >
      <Section.Container className="py-0 lg:py-0 justify-between items-center">
        <Branding />
        <NavbarTitle />
        <nav className={classNames("nav", styles.nav)}>
          {/* <Link href="/about">
            <a className={classNames("nav-item", styles.navItem)}>About</a>
          </Link> */}
          <Button
            href="/contact"
            theme="light"
            className="umami--click--navbar-contact"
          >
            Contact
          </Button>
        </nav>
      </Section.Container>
    </Section>
  )
}

export default Navbar
