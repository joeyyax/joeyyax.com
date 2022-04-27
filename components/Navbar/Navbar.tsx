import Link from "next/link"
import classNames from "classnames"
import Branding from "components/Branding/Branding"
import Section from "components/Section/Section"
import Button from "components/Button/Button"

import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <Section
      name="navbar"
      el="header"
      className={classNames(
        "flex w-full h-20 lg:h-24 items-star z-50"
        // "bg-slate-100 dark:bg-slate-800 bg-opacity-20 dark:bg-opacity-20 backdrop-blur"
      )}
    >
      <Section.Container className="py-0 lg:py-0 justify-between items-center">
        <Branding />
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
