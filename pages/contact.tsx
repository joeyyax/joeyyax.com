import SEO from "lib/SEO"
import Section from "components/Section/Section"
import Button from "components/Button/Button"
import Socials from "components/Socials/Socials"
// import ContactForm from "components/Form/ContactForm"
import { FaRegCalendarCheck as CalendarIcon } from "react-icons/fa"

export default function Contact() {
  return (
    <>
      <SEO title="Joey Yax - Get In Touch" />
      <Section name="contact">
        <Section.Container className="flex-col bg-slate-100 dark:bg-slate-800 relative w-[90ch]">
          <div className="body flex flex-col w-full prose prose-slate lg:prose-lg dark:prose-invert">
            <h1>👋 Let&apos;s chat!</h1>
            <p className="text-xl">
              Whether you are interested in starting a project, or just saying
              &quot;hi&quot; I&apos;d love to hear from you. In most cases I can
              get back to you within one business day.
            </p>

            <p>
              <Button
                href="mailto:joey@joeyyax.com"
                theme="primary"
                className="umami--click--email"
              >
                Email joey@joeyyax.com
              </Button>
            </p>

            <hr />

            <h2>Find me on socials too</h2>
            <p>I don&apos;t post often, but I do monitor them:</p>
            <Socials withNames className="mt-4" />
          </div>
        </Section.Container>
      </Section>
    </>
  )
}