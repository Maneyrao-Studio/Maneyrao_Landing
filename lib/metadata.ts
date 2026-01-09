import { Metadata } from "next"

export const ourWebsiteUrl = "https://www.maneyrao.vercel.app"

interface MetadataOptions {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogImageAlt?: string
  generateOgImage?: boolean
}

export async function generateMetadata(
  webUrl: string,
  options?: MetadataOptions
): Promise<Metadata> {
  const title = options?.title || "Maneyrao Studio"
  const description =
    options?.description ||
    "Nos enfocamos en brindar claridad, ayudar a exponer e integrar sistemas que se adapten y optimicen tu forma de trabajar."
  const keywords = options?.keywords || [
    "soluciones digitales",
    "desarrollo web",
    "diseño de sistemas",
  ]
  const ogImageAlt = options?.ogImageAlt || "Maneyrao Studio"

  let ogImage = options?.ogImage || "/og-image.jpg"
  
  if (options?.generateOgImage !== false && !options?.ogImage) {
    const path = new URL(webUrl).pathname
    ogImage = `/api/og${path === "/" ? "" : path}`
  }

  return {
    metadataBase: new URL(ourWebsiteUrl),
    title,
    description,
    themeColor: "#000000",
    keywords,
    authors: [{ name: "Maneyrao Studio" }],
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: webUrl,
      siteName: "Maneyrao Studio",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: webUrl,
    },
  }
}