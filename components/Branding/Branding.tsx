import Link from "next/link"
import classNames from "classnames"

const Branding = () => {
  return (
    <Link href="/" passHref>
      <a
        className={classNames(
          "branding",
          "inline-flex font-bold uppercase text-slate-400 hover:text-slate-500 dark:text-slate-600 no-break",
          "umami--click--branding"
        )}
      >
        Joey Yax
      </a>
    </Link>
  )
}

export default Branding
