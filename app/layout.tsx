import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import PerformanceMonitor from "@/components/PerformanceMonitor"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: "FRYE Ecosystem - Transform Ideas into Liquid Assets",
  description: "Next-generation platform for digital innovation and IP monetization",
  keywords: ["blockchain", "NFT", "intellectual property", "AI", "innovation", "tokenization"],
  authors: [{ name: "FRYE Ecosystem" }],
  creator: "FRYE Ecosystem",
  publisher: "FRYE Ecosystem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frye-ecosystem.com",
    title: "FRYE Ecosystem - Transform Ideas into Liquid Assets",
    description: "Next-generation platform for digital innovation and IP monetization",
    siteName: "FRYE Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRYE Ecosystem - Transform Ideas into Liquid Assets",
    description: "Next-generation platform for digital innovation and IP monetization",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <PerformanceMonitor />
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">{children}</main>
      </body>
    </html>
  )
}
