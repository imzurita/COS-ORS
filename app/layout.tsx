import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "COS & ORS TECNICS S.L. - Reformas de Fachadas en Pineda de Mar",
  description:
    "Especialistas en reformas de fachadas en Pineda de Mar, Barcelona. Profesionales con experiencia en rehabilitación y mantenimiento de fachadas.",
  icons: {
    icon: "images/ico_cosors.ico", // Path to your favicon
  },
  keywords: "reformas fachadas, Pineda de Mar, Barcelona, rehabilitación fachadas, mantenimiento fachadas",
  authors: [{ name: "COS & ORS TECNICS S.L." }],
  openGraph: {
    title: "COS & ORS TECNICS S.L. - Reformas de Fachadas",
    description: "Especialistas en reformas de fachadas en Pineda de Mar, Barcelona",
    type: "website",
    locale: "es_ES",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <ScrollToTop />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
