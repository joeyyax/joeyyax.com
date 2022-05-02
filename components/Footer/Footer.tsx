import Link from "next/link"
import Section from "../Section/Section"
import Socials from "../Socials/Socials"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Section
      name="footer"
      id="footer"
      animationVariants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 1,
        },
      }}
    >
      <Section.Container
        stack={false}
        className="rounded-none self-end justify-between text-slate-500 dark:text-slate-500 border-t border-slate-100 dark:border-slate-800"
      >
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
