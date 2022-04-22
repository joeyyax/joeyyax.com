import Script from "next/script"

const GoogleTagManager = () => {
  // just a wrapper
}
GoogleTagManager.displayName = "Google Tag Manager"

GoogleTagManager.Script = () => {
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`}
    </Script>
  )
}
GoogleTagManager.Script.displayName = "Google Tag Manager Script"

GoogleTagManager.NoScript = () => {
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
      }}
    />
  )
}
GoogleTagManager.NoScript.displayName = "Google Tag Manager Fallback (NoScript)"

export default GoogleTagManager
