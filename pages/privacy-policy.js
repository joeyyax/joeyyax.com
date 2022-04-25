import SEO from "lib/SEO"
import Section from "components/Section/Section"

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Joey Yax - Privacy Policy" />
      <Section name="hero">
        <Section.Container className="flex-col lg:flex-row bg-slate-100 dark:bg-slate-800 relative w-[80ch] drop-shadow-2xl">
          <div className="body flex flex-col prose prose-slate lg:prose-lg dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p>
              The contents of this site express my personal opinion at the time
              of writing.
            </p>

            <h2>General Data Protection</h2>
            <p>
              No cookies or other invasive tracking methods (looking at you
              Google Analytics) here. A self-hosted,{" "}
              <dfn title="General Data Protection Regulation">GDPR</dfn>{" "}
              compliant analytics tool called{" "}
              <a href="https://umami.is" target="_blank" rel="noreferrer">
                Umami
              </a>
              {` `}
              however is used to track overall visitor trends.
            </p>

            <h2>Visitor Privacy</h2>
            <p>Only the following mertrics are collected:</p>
            <ul>
              <li>Referrer</li>
              <li>Page Views</li>
              <li>Country</li>
              <li>Operating system name, version and vendor</li>
              <li>Browser name, version and vendor</li>
              <li>Device type</li>
            </ul>
            <p>
              The goal here is to track trends not to identify you. Data is
              anonymized and in aggregate-form only. Tracking is per device and
              not tracked across any other websites. No cookies or other
              persistent identifiers are used.
            </p>
          </div>
        </Section.Container>
      </Section>
    </>
  )
}
