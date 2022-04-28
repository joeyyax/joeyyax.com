import SEO from "lib/SEO"
import Header from "components/Header/Header"
import Section from "components/Section/Section"
import Button from "components/Button/Button"
import Socials from "components/Socials/Socials"

export default function Contact() {
  return (
    <>
      <SEO title="Joey Yax - Get In Touch" />
      <Header>
        <h1>Get In Touch</h1>
        <p>
          Whether you are interested in starting a project or just saying,
          &quot;Hi,&quot; I&apos;d love to hear from you.
        </p>
        <p>
          <Button
            href="mailto:joey@joeyyax.com"
            theme="primary"
            className="umami--click--email"
            lg
          >
            Email joey@joeyyax.com
          </Button>
        </p>
      </Header>
      <Section name="contact">
        <Section.Container className="flex-col">
          <h2>Find me on socials too</h2>
          <p>I don&apos;t post often, but I do monitor them:</p>
          <Socials withNames exclude="github" className="mt-4" />
        </Section.Container>
      </Section>
    </>
  )
}
