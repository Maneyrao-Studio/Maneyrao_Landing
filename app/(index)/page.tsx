import { Metadata } from "next"
import HomeClient from "./home-client"
import { generateMetadata as genMeta, ourWebsiteUrl } from "@/lib/metadata"

export async function generateMetadata(): Promise<Metadata> {
  return genMeta(ourWebsiteUrl, {
    title: "Maneyrao Studio - Soluciones digitales personalizadas",
    description:
      "Nos enfocamos en brindar claridad, ayudar a exponer e integrar sistemas que se adapten y optimicen tu forma de trabajar. Diseñamos soluciones digitales a medida para profesionales independientes.",
    keywords: [
      "soluciones digitales personalizadas",
      "desarrollo web",
      "diseño de sistemas",
      "automatización de procesos",
      "landing pages profesionales",
      "consultoria digital",
      "optimización de flujos de trabajo",
      "tecnología humanizada",
      "desarrollo a medida",
      "transformación digital",
    ],
    generateOgImage: true,
  })
}

export default function Home() {
  return <HomeClient />
}