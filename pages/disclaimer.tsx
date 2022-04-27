import Link from "next/link"
import SEO from "lib/SEO"
import Section from "components/Section/Section"

export default function PrivacyPolicy() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <SEO title="Joey Yax - Privacy Policy" />
      <Section name="disclaimer">
        <Section.Container className="flex-col lg:flex-row bg-white dark:bg-slate-900 w-auto">
          <div className="body flex flex-col prose prose-slate lg:prose-lg dark:prose-invert">
            <h1>Disclaimer</h1>
            <p>
              The contents of this site express my personal opinion at the time
              of writing.
            </p>
            <h2>General Data Protection</h2>
            <p>
              No cookies or other invasive tracking methods here. A self-hosted,{" "}
              <dfn title="General Data Protection Regulation">GDPR</dfn>{" "}
              compliant analytics tool called{" "}
              <a href="https://umami.is" target="_blank" rel="noreferrer">
                Umami
              </a>
              {` `}
              is used to track overall visitor trends.
            </p>
            <h2>Visitor Privacy</h2>
            <p>Only the following metrics are collected:</p>
            <ul>
              <li>Referrer</li>
              <li>Page Views</li>
              <li>Country</li>
              <li>Operating system name, version, and vendor</li>
              <li>Browser name, version, and vendor</li>
              <li>Device type</li>
            </ul>
            <p>
              <strong>
                The goal here is to track trends, not to identify you.
              </strong>{" "}
              Data is anonymized and in aggregate form only. Tracking is per
              device and does not track you across any other websites. No
              cookies or other persistent identifiers are in use.
            </p>
            <h2>Licenses</h2>
            <p>
              The contents of this website are &copy; {currentYear} Joey Yax.
              All rights reserved.
            </p>
            <p>
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
              .
            </p>
            {/* <p>Copyright {currentYear}. Joey Yax.</p>
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p> */}
            <h2>Copyright Infringement</h2>
            <p>
              If anything on this website uses, misrepresents, or links to
              material you own or represent, please{" "}
              <Link href="/contact">
                <a className="umami--click--let-me-know-infringement">
                  let me know
                </a>
              </Link>
              .
            </p>
          </div>
        </Section.Container>
      </Section>
    </>
  )
}
