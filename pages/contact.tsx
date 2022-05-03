import Link from "next/link"
import SEO from "lib/SEO"
import Header from "components/Header/Header"
import Section from "components/Section/Section"
import Socials from "components/Socials/Socials"
import ContactForm from "components/Form/ContactForm"
import { MdOutlineEmail as EmailIcon } from "react-icons/md"
import { IoPhonePortraitOutline as PhoneIcon } from "react-icons/io5"

export default function Contact() {
  return (
    <>
      <SEO title="Joey Yax - Get In Touch" />
      <Header overlap>
        <Header.Title>Get In Touch</Header.Title>
        <Header.Body>
          <p>
            Whether you are interested in starting a project or just saying,
            &quot;Hi,&quot; I&apos;d love to hear from you.
          </p>
        </Header.Body>
      </Header>

      <Section id="contact-form">
        <Section.Container
          gap="none"
          padding="none"
          className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
          <Section.Column padding="md" className="lg:w-3/4">
            <ContactForm />
          </Section.Column>
          <Section.Column
            padding="md"
            className="lg:w-1/3 bg-gradient-to-bl from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-900 text-white"
          >
            <h3 className="text-sm font-bold tracking-wide uppercase opacity-90">
              Contact Information
            </h3>
            <ul className="w-full">
              <li className="pb-2 border-b border-dotted border-white border-opacity-20">
                <Link href="mailto:joey@joeyyax.com">
                  <a className="inline-flex flex-row gap-2 items-center umami--click--email">
                    <EmailIcon /> joey@joeyyax.com
                  </a>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="tel:5037065054">
                  <a className="inline-flex flex-row gap-2 items-center umami--click--phone">
                    <PhoneIcon /> (503) 706-5054
                  </a>
                </Link>
              </li>
            </ul>

            <div className="text-sm font-bold tracking-wide uppercase opacity-90 mt-8">
              Find me on socials too
            </div>
            {/* <p>I don&apos;t post often, but I do monitor them:</p> */}
            <Socials withNames exclude="github" />
          </Section.Column>
        </Section.Container>
      </Section>
    </>
  )
}
