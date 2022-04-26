import { useRouter } from "next/router"
import Head from "next/head"
import { JsonLd } from "react-schemaorg"

interface Props {
  title: string
  description?: string
  keywords?: string
  structuredData?: any
  facebook?: {
    title?: string
    type?: string
    image?: string
    description?: string
  }
  twitter?: {
    title?: string
    description?: string
    image?: string
  }
  children?: any
}

const SEO = ({
  title = "Joey Yax",
  description,
  keywords,
  structuredData,
  facebook,
  twitter,
  children,
}: Props) => {
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_URL || "https://www.joeyyax.com"
  const path = router.asPath
  const url = domain + path.replace(/\/$/, "") // full url (without trailing slash)

  return (
    <Head>
      <title key="title">{title}</title>
      {description && (
        <meta key="description" name="description" content={description} />
      )}
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}
      {structuredData && <JsonLd item={structuredData} />}

      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:type"
        property="og:type"
        content={facebook?.type || "website"}
      />
      <meta key="og:image" property="og:image" content={facebook?.image} />

      <meta key="og:url" property="og:url" content={url} />
      <meta
        key="og:description"
        property="og:description"
        content={facebook?.description || description}
      />

      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={twitter?.description || description}
      />
      <meta key="twitter:image" name="twitter:image" content={twitter?.image} />
      {children}
    </Head>
  )
}

export default SEO
