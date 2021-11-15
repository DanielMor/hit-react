import Head from 'next/head'

export const SEOHead = ({
  pageTitle,
  title,
  description,
  siteName = 'HumanIT - React',
  image,
  url,
  type = 'website',
  card = 'summary_large_image',
}) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="title" content={title || pageTitle} />
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />

    <meta property="og:site_name" content={siteName} />
    {url && <meta property="og:url" content={url} />}
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title || pageTitle} />
    <meta property="og:description" content={description} />
    {image?.url && <meta property="og:image" content={image.url} />}

    {url && <meta name="twitter:url" content={url} />}
    <meta name="twitter:card" content={card} />
    <meta name="twitter:title" content={title || pageTitle} />
    <meta name="twitter:description" content={description} />
    {image?.url && <meta name="twitter:image" content={image.url} />}
  </Head>
)

export default SEOHead
