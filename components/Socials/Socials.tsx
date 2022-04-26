import classNames from "classnames"
import Link from "next/link"
import {
  FaGithub as GitHubIcon,
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa"

import styles from "./Socials.module.css"

interface Props {
  withNames?: boolean
  className?: string
  include?: Array<string> | string
  exclude?: Array<string> | string
}

const Socials = ({ withNames = false, include, exclude, className }: Props) => {
  let items = [
    {
      name: "GitHub",
      slug: "github",
      href: "https://www.github.com/joeyyax",
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      slug: "linkedin",
      href: "https://www.linkedin.com/in/joeyyax",
      icon: <LinkedInIcon />,
    },
    {
      name: "Twitter",
      slug: "twitter",
      href: "https://twitter.com/joeyyax",
      icon: <TwitterIcon />,
    },
  ]

  if (include) {
    // if include isn't an array, make it one
    if (typeof include === "string") {
      include = [include]
    }

    items = items.filter((item) => include.includes(item.slug))
  }

  if (exclude) {
    // if exclude isn't an array, make it one
    if (typeof exclude === "string") {
      exclude = [exclude]
    }

    items = items.filter((item) => !exclude.includes(item.slug))
  }

  return (
    <div
      className={classNames(
        "socials flex flex-row gap-4 text-2xl",
        className && className
      )}
    >
      {items.map(({ name, slug, href, icon }) => (
        <Link href={href} passHref key={name}>
          <a
            className={classNames(
              "social-icon",
              `social--${slug}`,
              styles.social,
              styles[slug],
              `umami--click--social-${slug}`
            )}
            title={name}
            target="_blank"
          >
            {icon} {withNames && <span className={styles.name}>{name}</span>}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Socials
