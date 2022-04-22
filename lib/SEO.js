import PropTypes from "prop-types"
import Head from "next/head"
import { JsonLd } from "react-schemaorg"

const SEO = ({ title, description, structuredData, children }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {structuredData && <JsonLd item={structuredData} />}
      {children}
    </Head>
  )
}

SEO.displayName = "SEO Elements"

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  structuredData: PropTypes.any.isRequired,
}

SEO.defaultProps = {
  title: "Joey Yax",
  description: undefined,
  structuredData: undefined,
}

export default SEO
