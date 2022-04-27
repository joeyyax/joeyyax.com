import Link from "next/link"
import Section from "../Section/Section"
import Socials from "../Socials/Socials"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section el="footer" name="footer">
      <Section.Container className="flex-col lg:flex-row lg:py-8 text-slate-500 dark:text-slate-500 justify-between">
        <div className="legal text-xs leading-relaxed">
          The contents of this website are &copy; {currentYear} Joey Yax. All
          rights reserved.
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
          .{" "}
          {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA && (
            <>
              Current Build:{" "}
              {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(-7)}
            </>
          )}
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

export default Footer
