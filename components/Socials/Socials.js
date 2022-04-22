// import PropTypes from "prop-types";
import Link from "next/link"
import {
  FaGithub as GitHubIcon,
  FaTwitter as TwitterIcon,
  FaLinkedin as LinkedInIcon,
} from "react-icons/fa"

const Socials = () => {
  const items = [
    {
      name: "GitHub",
      href: "https://www.github.com/joeyyax",
      icon: <GitHubIcon />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/joey-yax-a0a9b11a4/",
      icon: <LinkedInIcon />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/joeyyax",
      icon: <TwitterIcon />,
    },
  ]

  return (
    <div className="socials flex flex-row gap-4 text-2xl">
      {items.map(({ name, href, icon }) => (
        <Link href={href} passHref key={name}>
          <a title={name} target="_blank">
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
