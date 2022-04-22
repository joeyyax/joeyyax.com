import Head from "next/head"
import SEO from "lib/SEO"
import Hero from "components/Hero/Hero"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97266",
    },
    email: `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`,
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
      <Hero />
    </>
  )
}
