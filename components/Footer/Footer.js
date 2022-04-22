import PropTypes from "prop-types"
import classNames from "classnames"
import Section from "../Section/Section"
import Socials from "../Socials/Socials"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section type="footer" name="footer" className="">
      <Section.Container className="mt-4 flex-col lg:flex-row lg:py-8 text-slate-600 justify-between border-t border-dotted border-slate-400 dark:border-slate-700">
        <div className="copyright">
          &copy; {currentYear} Joey Yax. All rights reserved.
        </div>
        <Socials />
      </Section.Container>
    </Section>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
