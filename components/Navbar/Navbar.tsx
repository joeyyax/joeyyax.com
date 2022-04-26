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
      className="flex w-full h-32 -mb-10 lg:h-60 lg:-mb-28 items-star"
    >
      <Section.Container className="h-20 lg:h-32 xl:py-8 justify-between items-center">
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
