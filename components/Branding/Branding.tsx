import Link from "next/link"
import classNames from "classnames"

const Branding = () => {
  return (
    <Link href="/" passHref>
      <a
        className={classNames(
          "branding",
          "inline-flex font-bold uppercase text-slate-400 hover:text-slate-500 dark:text-slate-600",
          // "border-2 border-slate-300  dark:border-slate-700 px-2 rounded-md",
          "umami--click--branding"
        )}
      >
        Joey Yax
      </a>
    </Link>
  )
}

export default Branding
