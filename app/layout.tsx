import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "FRYE Ecosystem - Transform Ideas into Liquid Assets",
  description: "Next-generation platform for digital innovation and IP monetization",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">{children}</main>
      </body>
    </html>
  )
}
