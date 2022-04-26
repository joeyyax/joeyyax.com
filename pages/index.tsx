import Section from "components/Section/Section"
import Button from "components/Button/Button"
import Cycle from "components/Cycle/Cycle"
import classNames from "classnames"
import { Person, WithContext } from "schema-dts"

import SEO from "lib/SEO"

import styles from "./index.module.css"

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
      <Section name="hero">
        <Section.Container className="flex-col lg:flex-row bg-slate-100 dark:bg-slate-900 relative overflow-y-hidden">
          <div className="body flex flex-col w-full lg:w-2/5 gap-6">
            <h1
              className={classNames(
                "font-extrabold text-6xl lg:text-8xl leading-none uppercase -mb-2"
              )}
            >
              <Cycle speed={1500} startAt={0}>
                <Cycle.String
                  id={0}
                  base="block transition-all ease-in-out text-transparent bg-clip-text bg-gradient-to-br"
                  inactive="from-slate-600 to-slate-800 dark:from-slate-500 dark:to-slate-600"
                  active="from-yellow-300 to-orange-600"
                >
                  Build.
                </Cycle.String>
                <Cycle.String
                  id={1}
                  base="block transition-all ease-in-out text-transparent bg-clip-text bg-gradient-to-br"
                  inactive="from-slate-600 to-slate-800 dark:from-slate-500 dark:to-slate-600"
                  active="from-orange-600 to-indigo-600"
                  error="from-orange-600 to-red-800"
                >
                  Ship.
                </Cycle.String>
                <Cycle.String
                  id={2}
                  base="block transition-all ease-in-out text-transparent bg-clip-text bg-gradient-to-br"
                  inactive="from-slate-600 to-slate-800 dark:from-slate-500 dark:to-slate-600"
                  active="from-indigo-400 to-emerald-600"
                >
                  Deploy.
                </Cycle.String>
              </Cycle>
            </h1>
            <div className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m Joey, a full-stack web developer based in Portland, OR.
                I work with brands and businesses of all sizes to create modern,
                engaging, and thoughtful web experiences.
              </p>
            </div>
            <div>
              <Button
                href="/contact"
                className="umami--click--get-in-touch-hero-button"
              >
                Get in touch
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex supporting-image w-full lg:w-3/5">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 909.061 724.757"
              className="h-48 w-48 lg:w-full lg:h-auto overflow-hidden rounded-full lg:rounded-none border-4 lg:border-none border-slate-100"
            >
              <path
                d="M827.917,190.123V164.334a1.834,1.834,0,0,0-1.834-1.834H807.148a1.837,1.837,0,0,1-1.785-1.431,70.245,70.245,0,0,0-8.727-21.055,1.838,1.838,0,0,1,.25-2.275l13.393-13.392a1.835,1.835,0,0,0,0-2.594l-18.24-18.24a1.834,1.834,0,0,0-2.593,0l-13.393,13.393a1.838,1.838,0,0,1-2.274.251,70.241,70.241,0,0,0-21.055-8.727,1.838,1.838,0,0,1-1.431-1.785V87.709a1.834,1.834,0,0,0-1.834-1.834H723.67a1.834,1.834,0,0,0-1.834,1.834v18.936a1.838,1.838,0,0,1-1.431,1.785,70.213,70.213,0,0,0-21.054,8.727,1.838,1.838,0,0,1-2.275-.25l-13.393-13.394a1.834,1.834,0,0,0-2.594,0l-18.233,18.239a1.834,1.834,0,0,0,0,2.593l13.392,13.392a1.837,1.837,0,0,1,.251,2.274,70.239,70.239,0,0,0-8.726,21.057,1.838,1.838,0,0,1-1.785,1.431H647.053a1.834,1.834,0,0,0-1.834,1.834v25.789a1.834,1.834,0,0,0,1.834,1.834h18.935a1.837,1.837,0,0,1,1.785,1.431,70.23,70.23,0,0,0,8.727,21.055,1.838,1.838,0,0,1-.251,2.274L662.857,230.11a1.832,1.832,0,0,0,0,2.593l18.232,18.233a1.835,1.835,0,0,0,2.594,0l13.392-13.393a1.836,1.836,0,0,1,2.274-.25,70.234,70.234,0,0,0,21.056,8.726,1.839,1.839,0,0,1,1.431,1.785V266.74a1.834,1.834,0,0,0,1.834,1.834h25.789a1.834,1.834,0,0,0,1.834-1.834V247.8a1.836,1.836,0,0,1,1.431-1.784,70.285,70.285,0,0,0,21.056-8.726,1.836,1.836,0,0,1,2.274.25l13.392,13.392a1.834,1.834,0,0,0,2.593,0l18.24-18.233a1.835,1.835,0,0,0,0-2.594l-13.394-13.393a1.838,1.838,0,0,1-.25-2.274,70.252,70.252,0,0,0,8.728-21.054,1.836,1.836,0,0,1,1.784-1.431h18.936A1.834,1.834,0,0,0,827.917,190.123Zm-90.024,27.992a40.909,40.909,0,1,1,39.558-39.54A40.9,40.9,0,0,1,737.893,218.115Z"
                className={classNames(styles.border, "animate-pulse")}
              ></path>
              <path
                d="M909.061,705.814H0c9.961-25.4,28.356-46.951,54.287-53.343,37.934-9.34,78.077,16.338,115.926,6.684,21.5-5.48,38.433-21.45,56.222-34.71,67.11-50.036,159.078-64.824,238.49-38.341,41.51,13.837,79.336,38.034,121.859,48.325,54.985,13.307,112.487,2.271,169.031.452C810.885,633.109,889.791,655.548,909.061,705.814Z"
                className={styles.ground}
              ></path>
              <g>
                <g>
                  <rect
                    x="288.879"
                    y="8.823"
                    width="360.33"
                    height="688.323"
                    rx="39.115"
                    className={styles.screen}
                  ></rect>
                  <path
                    d="M610.093,705.969h-282.1a47.993,47.993,0,0,1-47.939-47.939V47.938A47.993,47.993,0,0,1,327.994,0h282.1a47.992,47.992,0,0,1,47.938,47.938V658.03A47.992,47.992,0,0,1,610.093,705.969ZM327.994,17.646A30.326,30.326,0,0,0,297.7,47.938V658.03a30.326,30.326,0,0,0,30.292,30.292h282.1a30.326,30.326,0,0,0,30.292-30.292V47.938a30.326,30.326,0,0,0-30.292-30.292Z"
                    className={styles.border}
                  ></path>
                </g>
                <path
                  d="M407.276,8.823H530.811a0,0,0,0,1,0,0V32.791A17.941,17.941,0,0,1,512.87,50.731H425.217a17.941,17.941,0,0,1-17.941-17.941V8.823A0,0,0,0,1,407.276,8.823Z"
                  className={styles.border}
                ></path>
              </g>
              <g>
                <rect
                  x="321.95"
                  y="86.081"
                  width="76.634"
                  height="76.634"
                  className={styles.border}
                ></rect>
                <rect
                  x="416.414"
                  y="130.575"
                  width="199.723"
                  height="20.321"
                  className={styles.border}
                ></rect>
                <rect
                  x="416.414"
                  y="94.178"
                  width="142.245"
                  height="20.321"
                  className={styles.border}
                ></rect>
              </g>
              <rect
                x="321.95"
                y="184.653"
                width="294.187"
                height="221.685"
                className={styles.border}
              ></rect>
              <rect
                x="321.95"
                y="435.227"
                width="294.187"
                height="110.842"
                className={styles.border}
              ></rect>
              <rect
                x="321.95"
                y="575.277"
                width="294.187"
                height="81.635"
                className={styles.border}
              ></rect>
              <polygon
                points="51.191 331.705 50.901 331.305 50.911 331.305 51.191 331.705"
                className={styles.accent}
              ></polygon>
              <g>
                <rect
                  x="466.124"
                  y="246.581"
                  width="5.839"
                  height="96.785"
                  className={styles.screen}
                ></rect>
                <rect
                  x="420.651"
                  y="292.054"
                  width="96.785"
                  height="5.839"
                  className={styles.screen}
                ></rect>
              </g>
              <g>
                <g>
                  <path
                    d="M802.286,545.481s-7.733-4.1-6.006-25.157L780.3,517.362s1.795,18.878-6.287,24.872Z"
                    fill="#E98862"
                  ></path>
                  <path
                    d="M777.29,538.287l13.272-10.153-10.424-.108A28.756,28.756,0,0,1,777.29,538.287Z"
                    opacity="0.15"
                  ></path>
                  <path
                    d="M805.345,512.159c-1.106,6.389-4.593,12.438-10.228,14.5-6.689,2.45-11.644,2.615-19.357,2.615-10.526,0-10.178-10.976-10.473-22.038-.3-11.105.586-23.018,4.746-26.888,8.3-7.725,32.673-2.833,35.637,10.087C807.2,497.119,806.4,506.079,805.345,512.159Z"
                    fill="#E98862"
                  ></path>
                  <path
                    d="M759.646,486.77s-4.311-.962-3.131-5.261c.782-2.85,4.435-2.217,4.435-2.217s-3.458-.633-3.458-3.652c0-1.9,1.461-5.125,5.871-3.283,5.174,2.161,11.074,1.884,15.56,1.129a51.841,51.841,0,0,1,7.708-1.088l.013,0v0a29.7,29.7,0,0,1,8.814,1.179c8.02,2.4,20.158,9.591,17.578,25.893-2.881,18.195-11.418,25.153-15.175,27.385a1.712,1.712,0,0,1-2.517-.957c-1.066-3.41-2.9-11.99-2.388-29.682-24.652-1.209-31.744-1.576-31.744-1.576s-5.805.217-5.805-4.022S759.646,486.77,759.646,486.77Z"
                    fill="#0f1011"
                  ></path>
                  <g>
                    <circle
                      cx="780.326"
                      cy="505.789"
                      r="1.449"
                      fill="#0f1011"
                    ></circle>
                    <circle
                      cx="768.895"
                      cy="504.852"
                      r="1.449"
                      fill="#0f1011"
                    ></circle>
                    <line
                      x1="770.222"
                      y1="501.035"
                      x2="766.384"
                      y2="501.083"
                      fill="none"
                      stroke="#0f1011"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.362"
                    ></line>
                    <line
                      x1="783.453"
                      y1="502.483"
                      x2="779.668"
                      y2="501.572"
                      fill="none"
                      stroke="#0f1011"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.362"
                    ></line>
                  </g>
                  <path
                    d="M787.864,509.335a6.143,6.143,0,0,0,12.244,1,6.041,6.041,0,0,0-5.62-6.624C790.11,503.572,788.141,505.954,787.864,509.335Z"
                    fill="#E98862"
                  ></path>
                  <g opacity="0.15">
                    <path d="M773.894,513.826a.5.5,0,0,0,.147-.978l-2.947-.9,2.061-4.591a.5.5,0,0,0-.912-.41l-2.293,5.107a.5.5,0,0,0,.309.683l3.488,1.071A.473.473,0,0,0,773.894,513.826Z"></path>
                  </g>
                  <path
                    d="M779.656,517.2s-5.349.564-9.1-.746c0,0,.03,3.523,4.262,3.87S779.656,517.2,779.656,517.2Z"
                    fill="#f8fcff"
                  ></path>
                </g>
                <g>
                  <path
                    d="M739.489,700.133c-1.9-.319-23.335-3.98-23.335-3.98l3.535-20.7s21.377,3.651,23.271,3.969Z"
                    fill="#E98862"
                  ></path>
                  <path
                    d="M703.926,719.989a4.109,4.109,0,0,0,3.693,4.752h0a4.11,4.11,0,0,0,3.92-2.039l12.112-22.755a3.461,3.461,0,0,0,.159-2.885,19.122,19.122,0,0,1-1.46-11.873,17.038,17.038,0,0,1,4.635-8.167,1.547,1.547,0,0,0-.767-2.691l-11.788-1.974a2.678,2.678,0,0,0-3.085,2.21Z"
                    className={styles.accent2}
                  ></path>
                </g>
                <path
                  d="M805.846,644.145c8.895.37,17.954.631,27.015.855l13.615.3,13.6.245,1.355.024a22.2,22.2,0,0,1,2.276,44.232l-134.4,16.32L723.835,666.4l133.8-20.655L861.267,690l-13.809.893-13.8.834c-9.215.533-18.433,1.031-27.816,1.416Z"
                  fill="#262626"
                ></path>
                <g>
                  <path
                    d="M839.749,691.435c-18.555-2.7-20.4-3.2-21.013-3.359l5.457-20.279c-.061-.016-.141-.038-.238-.059,1.52.332,10.95,1.772,18.815,2.916Z"
                    fill="#E98862"
                  ></path>
                  <path
                    d="M862.927,709.486a4.109,4.109,0,0,1-2.724,5.366h0a4.11,4.11,0,0,1-4.236-1.258l-16.21-20.042a3.464,3.464,0,0,1-.7-2.8,19.109,19.109,0,0,0-.819-11.934,17.038,17.038,0,0,0-6.1-7.138,1.546,1.546,0,0,1,.242-2.788l11.2-4.176a2.679,2.679,0,0,1,3.449,1.584Z"
                    className={styles.accent2}
                  ></path>
                </g>
                <path
                  d="M776,689.545c-5.631-.479-11.261-.825-16.89-1.15-5.628-.3-11.257-.6-16.883-.8l-8.44-.325-8.438-.243c-5.626-.188-11.25-.265-16.875-.372l1.949-40.409c10.53,1.472,21.073,2.825,31.612,4.211s21.091,2.662,31.641,3.96l15.834,1.866,15.844,1.776c10.568,1.136,21.138,2.264,31.73,3.194l-4.648,39.83c-10.522-1.534-21.067-2.87-31.613-4.2L785,694.964l-15.838-1.83c-10.565-1.166-21.128-2.351-31.7-3.432s-21.146-2.189-31.732-3.181a20.231,20.231,0,0,1,.7-40.339l1.253-.07c5.615-.33,11.232-.629,16.846-1.039l8.423-.576,8.42-.658c5.614-.423,11.227-.948,16.839-1.468,5.611-.546,11.223-1.115,16.831-1.816Z"
                  fill="#262626"
                ></path>
                <polygon
                  points="826.28 638.011 829.24 687.716 743.75 686.712 750.203 642.706 826.28 638.011"
                  fill="#262626"
                ></polygon>
                <path
                  d="M854.819,626.772l-22.656-70.244a20.066,20.066,0,0,0-5.628-9.574c-4.571-4.57-12.461-7.52-22.08-7.53-.721,5.61-34.781,5.63-35.04.13-1.3.02-2.311.04-2.94.07-13.761.593-19.3,5.889-21.059,13.862l-28.883,69.891a10.5,10.5,0,0,0,11.185,14.406l15.781-2.249c-.777,3.931-.9,6.987.636,10.52,4.189,9.63,86.519,13.63,87.619-3.31.011-.166.012-.331.018-.5l13.681-1.272a10.9,10.9,0,0,0,9.366-14.2ZM742.966,614.4l5.221-12.634c-.058,4.519-.3,8.485-.646,11.982Zm86.927,6.126-3.992.372a64.08,64.08,0,0,1-2.946-19.351c0-.765.032-1.524.081-2.281Z"
                  className={styles.accent}
                ></path>
                <g>
                  <g>
                    <path
                      d="M797.841,573.032l3.534,52.679a4.545,4.545,0,0,1-4.535,4.849H723.263a4.546,4.546,0,0,1-4.521-4.077L713.3,573.8a4.545,4.545,0,0,1,4.521-5.012h75.487A4.545,4.545,0,0,1,797.841,573.032Z"
                      fill="#9ebcea"
                    ></path>
                    <rect
                      x="726.237"
                      y="624.216"
                      width="83.65"
                      height="6.344"
                      rx="3.172"
                      transform="translate(1536.124 1254.776) rotate(180)"
                      fill="#9ebcea"
                    ></rect>
                  </g>
                  <circle
                    cx="755.387"
                    cy="599.676"
                    r="7"
                    className={styles.lines}
                  ></circle>
                </g>
                <path
                  d="M765.473,637.25c4.49,2.77,11.44,4.08,17.5,4.56l.34-11.04c-2.85-.08-7.23-.38-11.52-.21-1.939-1.581-3.055-2.05-5.044-4.04-2.118-2.118-7.676-3.39-8.726,0S761.532,634.81,765.473,637.25Z"
                  fill="#E98862"
                ></path>
                <path
                  d="M769.415,539.554c.259,5.5,3.25,13.59,12.48,14.2,12.3.81,21.839-8.72,22.56-14.33h-.031C792.314,539.424,776.475,539.444,769.415,539.554Z"
                  fill="#E98862"
                ></path>
              </g>
              <g>
                <polygon
                  points="722.695 545.669 706.872 535.669 631.87 535.669 631.87 474.626 722.695 474.626 722.695 545.669"
                  className={styles.speechBubble}
                ></polygon>
                <g>
                  <path
                    d="M645.219,504.583l20.439-9.918v3.881l-16.214,7.546v.087l16.214,7.588v3.838l-20.439-9.918Z"
                    className={styles.speechLine}
                  ></path>
                  <path
                    d="M670.362,519.33l10.522-31.263h3.709L674.071,519.33Z"
                    className={styles.speechLine}
                  ></path>
                  <path
                    d="M709.347,507.773l-20.44,9.832v-3.838l16.472-7.588v-.087L688.907,498.5v-3.838l20.44,9.831Z"
                    className={styles.speechLine}
                  ></path>
                </g>
              </g>
              <g>
                <path
                  d="M151.769,694.994l-20.853-2.479c.939-7.893,2-17.374,2.071-18.929,0,.1,0,.182,0,.246h21C153.983,674.461,153.983,676.376,151.769,694.994Z"
                  fill="#E98862"
                ></path>
                <path
                  d="M68.093,697.505l-21-.068s.071-21.686.071-23.605h21C68.164,675.757,68.093,697.505,68.093,697.505Z"
                  fill="#E98862"
                ></path>
                <path
                  d="M159.516,687.733c-1.737-44.008-1.843-90.231-2.387-134.356-7.223-47.594-11.019-99.794-19.934-147.05l-.267.079-.781-5.329-76.078-4.7s-1.984,37.278-2.675,49.7C53.686,512.67,46.16,619.7,41.681,687.171l36.869,3.115c6.584-66.359,16.321-172.074,22.272-237.478,6.53,33.326,13.687,70.856,19.485,104.577,1.269,43.079,2.33,87.97,2.215,130.979Z"
                  fill="#262626"
                ></path>
                <path
                  d="M93.622,705.627A4.107,4.107,0,0,0,97.7,701.2h0a4.107,4.107,0,0,0-2.659-3.529L70.6,689.484a3.46,3.46,0,0,0-2.872.32,19.114,19.114,0,0,1-11.468,3.4,17.035,17.035,0,0,1-8.821-3.222,1.546,1.546,0,0,0-2.527,1.2v11.952a2.678,2.678,0,0,0,2.689,2.678Z"
                  className={styles.accent2}
                ></path>
                <path
                  d="M177.355,705.627a4.108,4.108,0,0,0,4.077-4.427h0a4.11,4.11,0,0,0-2.659-3.529l-24.443-8.187a3.461,3.461,0,0,0-2.872.32,19.112,19.112,0,0,1-11.468,3.4,17.035,17.035,0,0,1-8.82-3.222,1.547,1.547,0,0,0-2.528,1.2v11.952a2.678,2.678,0,0,0,2.689,2.678Z"
                  className={styles.accent2}
                ></path>
                <path
                  d="M173.432,326.119l.465.2-5.816.938,5.709,10.9s21.174,4.955,31.08-6.191a1.887,1.887,0,0,0-1.6-3.131c-5.709.58-15.891,1.269-20.476-.539,2.016-.99,4.691-2.507,4.271-3.413C185.959,322.505,176.374,325.645,173.432,326.119Z"
                  fill="#E98862"
                ></path>
                <rect
                  x="154.015"
                  y="140.54"
                  width="255.913"
                  height="192.844"
                  className={styles.component}
                ></rect>
                <path
                  d="M236.184,326.119l.465.2-5.817.938,5.71,10.9s21.173,4.955,31.08-6.191a1.888,1.888,0,0,0-1.6-3.131c-5.71.58-15.891,1.269-20.476-.539,2.016-.99,4.691-2.507,4.271-3.413C248.711,322.505,239.126,325.645,236.184,326.119Z"
                  fill="#E98862"
                ></path>
                <path
                  d="M83.436,292.36s8.042-3.454,8.042-24.581l16.165-1.647s-3.332,18.669,4.233,25.3Z"
                  fill="#E98862"
                ></path>
                <path
                  d="M83.11,258.9c.581,6.458,3.561,12.772,9.008,15.289a40.509,40.509,0,0,0,19.08,4.189c17.548,0,17.35-39.918,9.705-48.295s-32.332-5.493-36.342,7.141C82.487,243.759,82.558,252.754,83.11,258.9Z"
                  fill="#E98862"
                ></path>
                <g>
                  <circle
                    cx="108.566"
                    cy="254.596"
                    r="1.449"
                    className={styles.accent}
                  ></circle>
                  <path
                    d="M105.718,251.726a.68.68,0,0,1-.1-1.353l3.846-.6a.681.681,0,1,1,.209,1.346l-3.846.6A.631.631,0,0,1,105.718,251.726Z"
                    className={styles.accent}
                  ></path>
                </g>
                <path
                  d="M130.147,245.44s-1.106-28.451-32.615-24.069a21.719,21.719,0,0,0-6.642,2.182,14,14,0,1,0-14.072,23.41c0,.243,0,.482.016.728.875,18.441,9.614,27.107,13.263,28.52,15.39,5.961,21.805-1.546,28.419-29.9A69.783,69.783,0,0,0,130.147,245.44Z"
                  fill="#0f1011"
                ></path>
                <path
                  d="M233.156,323.641l-52.95,17.15-3.72-7.41h-13.16l-7.75-10.75h-.01l-14.37-20.25c-5.33-8.45-9.46-12.84-22.13-13.38-4.02-.18-23.61-.21-37.95-.21-9.64,0-17.55,2.96-22.12,7.53-15.75,15.75,3.58,42.59,3.58,63.59s-9.5,30.42-8.8,41.2c1.1,16.95,83.43,12.94,87.62,3.32,3.86-8.86-2.71-14.71-3.89-38.95l17.12-8.6,5.02,6.17a10.913,10.913,0,0,0,8.46,4.02,11.057,11.057,0,0,0,3.35-.53l68.42-22.16Zm-94.66,16.94c.12-1.02.24-2.03.36-3.05l1.66,2.04Z"
                  className={styles.accent}
                ></path>
                <path
                  d="M119.928,260.746a6.143,6.143,0,0,1-12.285,0,6.041,6.041,0,0,1,6.142-6.143C118.16,254.818,119.928,257.353,119.928,260.746Z"
                  fill="#E98862"
                ></path>
                <g>
                  <circle
                    cx="216.452"
                    cy="200.235"
                    r="33.727"
                    className={styles.lines}
                  ></circle>
                  <rect
                    x="182.725"
                    y="289.269"
                    width="198.491"
                    height="17.217"
                    className={styles.lines}
                  ></rect>
                  <rect
                    x="182.725"
                    y="252.676"
                    width="198.491"
                    height="17.217"
                    className={styles.lines}
                  ></rect>
                  <rect
                    x="260.83"
                    y="209.923"
                    width="120.387"
                    height="17.217"
                    className={styles.lines}
                  ></rect>
                  <rect
                    x="260.83"
                    y="173.33"
                    width="120.387"
                    height="17.217"
                    className={styles.lines}
                  ></rect>
                </g>
              </g>
            </svg>
          </div>
        </Section.Container>
      </Section>
    </>
  )
}
