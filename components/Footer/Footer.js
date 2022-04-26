import Link from "next/link"
import Section from "../Section/Section"
import Socials from "../Socials/Socials"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section el="footer" name="footer" className="">
      <Section.Container className="flex-col lg:flex-row lg:py-8 text-slate-500 dark:text-slate-300 justify-between">
        <div className="legal text-xs leading-relaxed">
          Contents of this website are &copy; {currentYear} Joey Yax. All rights
          reserved.
          <br />
          <a
            href="https://github.com/joeyyax/joeyyax.com"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>{" "}
          is available under the{" "}
          <a
            href="https://opensource.org/licenses/MIT"
            target="_blank"
            rel="noreferrer"
          >
            MIT license
          </a>
          .
          <br />
          <Link href="/disclaimer">
            <a>Disclaimer</a>
          </Link>
        </div>
        <Socials />
      </Section.Container>
    </Section>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
