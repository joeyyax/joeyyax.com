import PropTypes from "prop-types"
import Link from "next/link"
import classNames from "classnames"

const Branding = () => {
  return (
    <Link href="/" passHref>
      <a className="branding inline-flex font-bold uppercase text-slate-400 hover:text-slate-500 dark:text-slate-600 border-2 border-slate-300  dark:border-slate-800 px-2 rounded-md">
        Joey Yax
      </a>
    </Link>
  )
}

Branding.propTypes = {}

Branding.defaultProps = {}

export default Branding
