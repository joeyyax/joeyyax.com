import Link from "next/link"
import Section from "../Section/Section"
import Socials from "../Socials/Socials"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section type="footer" name="footer" className="">
      <Section.Container className="mt-4 flex-col lg:flex-row lg:py-8 text-slate-600 justify-between border-t border-dotted border-slate-400 dark:border-slate-700">
        <div className="copyright">
          Contents of this site are &copy; {currentYear} Joey Yax. All rights
          reserved.
          {` `}
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
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
        </div>
        <Socials />
      </Section.Container>
    </Section>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
