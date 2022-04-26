// import PropTypes from "prop-types";
import classNames from "classnames"
import Link from "next/link"
import {
  FaGithub as GitHubIcon,
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa"

import styles from "./Socials.module.css"

const Socials = () => {
  const items = [
    {
      name: "GitHub",
      slug: "github",
      href: "https://www.github.com/joeyyax",
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      slug: "linkedin",
      href: "https://www.linkedin.com/in/joey-yax-a0a9b11a4/",
      icon: <LinkedInIcon />,
    },
    {
      name: "Twitter",
      slug: "twitter",
      href: "https://twitter.com/joeyyax",
      icon: <TwitterIcon />,
    },
  ]

  return (
    <div className="socials flex flex-row gap-4 text-2xl">
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
            {icon}
          </a>
        </Link>
      ))}
    </div>
  )
}

// Socials.propTypes = {};

// Socials.defaultProps = {};

export default Socials
