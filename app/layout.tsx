import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const ourWebsiteUrl = "https://www.maneyrao.vercel.app/"

export async function generateMetadata(): Promise<Metadata> {
  const title = "Maneyrao Studio"

  const description =
    "Nos enfocamos en brindar claridad, ayudar a exponer e integrar sistemas que se adapten y optimicen tu forma de trabajar."

  return {
    metadataBase: new URL(ourWebsiteUrl),
    title,
    description,
    themeColor: "black"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={cn("min-h-screen bg-black font-sans antialiased selection:bg-white/20", inter.variable)}>
        {children}
      </body>
    </html>
  )
}
