import Section from "components/Section/Section"
import Button from "components/Button/Button"
import Cycle from "components/Cycle/Cycle"
import classNames from "classnames"
import { Person, WithContext } from "schema-dts"

import SEO from "lib/SEO"

import styles from "./index.module.css"
import { motion } from "framer-motion"

export default function Home() {
  const structuredData: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97266",
    },
    email: "mailto:joey@joeyyax.com",
    jobTitle: "Full-stack web developer",
    name: "Joey Yax",
    telephone: "(503) 706-5054",
    url: "https://www.joeyyax.com",
  }

  return (
    <>
      <SEO
        title="Joey Yax"
        description="I work with brands and businesses of all sizes to create modern, engaging and thoughtful web experiences."
        structuredData={structuredData}
      />
      <Section name="hero" className="self-center">
        <Section.Container className="flex-col text-slate-600 relative overflow-y-hidden">
          <h1 className={classNames("font-bold leading-tight")}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-600"
            >
              Hi, I&apos;m Joey, a full-stack web developer based in Portland,
              OR.
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              I work with brands and businesses of all sizes to create modern,
              engaging, and thoughtful web experiences.
            </motion.span>
          </h1>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.25 }}
          >
            <Button
              href="/contact"
              className="umami--click--get-in-touch-hero-button"
              theme="primary"
              lg
            >
              Get in touch
            </Button>
          </motion.div>
        </Section.Container>
      </Section>
    </>
  )
}
