import { Metadata } from "next"
import AboutClient from "./about-client"
import { generateMetadata as genMeta, ourWebsiteUrl } from "@/lib/metadata"

export async function generateMetadata(): Promise<Metadata> {
  return genMeta(`${ourWebsiteUrl}/about`, {
    title: "Nosotros | Maneyrao Studio - Tecnología pensada para personas",
    description:
      "Entendemos a la persona antes que al sistema. Diseñamos soluciones personalizadas para profesionales independientes y estudios que buscan más claridad, orden y mejor exposición de su trabajo.",
    keywords: [
      "soluciones digitales personalizadas",
      "desarrollo web a medida",
      "consultoria digital",
      "automatización de procesos",
      "diseño de sistemas",
      "profesionales independientes",
      "estudios digitales",
      "optimización de flujos de trabajo",
      "landing pages profesionales",
      "tecnología humanizada"
    ],
  })
}

export default function About() {
  return <AboutClient />
}
