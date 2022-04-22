import { Html, Head, Main, NextScript } from "next/document"
import GoogleTagManager from "../lib/GoogleTagManager"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager.NoScript />
      </body>
    </Html>
  )
}
