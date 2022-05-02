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
        "sticky top-0",
        "h-20 lg:h-24 z-50 justify-center",
        "bg-white dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70 backdrop-blur"
      )}
    >
      <Section.Container
        stack={false}
        gap="md"
        className="flex-row gap-8 md:gap-8 lg:gap-8 justify-between items-center overflow-visible"
      >
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
