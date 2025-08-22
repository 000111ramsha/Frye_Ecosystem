import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import PerformanceMonitor from "@/components/PerformanceMonitor"
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration"
import CacheInitializer from "@/components/CacheInitializer"
import Script from "next/script"

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
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS and resource hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/polygon.png" />
        <link rel="preload" as="image" href="/ethereum.png" />
        <link rel="preload" as="image" href="/bitcoin.png" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />

        {/* Performance optimization script */}
        <Script
          id="critical-optimizations"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // Critical performance optimizations
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Preload critical resources during idle time
                  const criticalImages = ['/minting.png', '/earn-frye.png', '/premium-access.png'];
                  criticalImages.forEach(src => {
                    const img = new Image();
                    img.src = src;
                  });
                });
              }

              // Optimize font loading
              if ('fonts' in document) {
                document.fonts.ready.then(() => {
                  document.documentElement.classList.add('fonts-loaded');
                });
              }
            `
          }}
        />
      </head>
      <body className={montserrat.className}>
        <ServiceWorkerRegistration />
        <CacheInitializer />
        <PerformanceMonitor />
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">{children}</main>
      </body>
    </html>
  )
}
