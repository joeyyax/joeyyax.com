import PropTypes from "prop-types"
import { useRouter } from "next/router"
import Head from "next/head"
import { JsonLd } from "react-schemaorg"

const SEO = ({
  title,
  description,
  keywords,
  structuredData,
  facebook,
  twitter,
  children,
}) => {
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_URL || "https://www.joeyyax.com"
  const path = router.asPath
  const url = domain + path.replace(/\/$/, "") // full url (without trailing slash)

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(",")} />}
      {structuredData && <JsonLd item={structuredData} />}

      <meta property="og:title" content={title} />
      <meta property="og:type" content={facebook?.type || "website"} />
      <meta property="og:image" content={facebook?.image} />

      <meta property="og:url" content={url} />
      <meta
        property="og:description"
        content={facebook?.description || description}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={twitter?.description || description}
      />
      <meta name="twitter:image" content={twitter?.image} />
      {children}
    </Head>
  )
}

SEO.displayName = "SEO Elements"

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  structuredData: PropTypes.object,
  facebook: PropTypes.shape({
    title: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
  twitter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
  children: PropTypes.node,
}

SEO.defaultProps = {
  title: "Joey Yax",
  description: undefined,
  keywords: undefined,
  structuredData: undefined,
  facebook: undefined,
  twitter: undefined,
  children: undefined,
}

export default SEO
