import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/FloatingContact"

/* ---------------- FONTS ---------------- */

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

/* ---------------- METADATA ---------------- */

export const metadata: Metadata = {
  title: "Charvex - IT Consulting & Technology",
  description:
    "Enterprise IT consulting, AI solutions, web development, ERP systems, and cloud infrastructure",
  icons: {
    icon: "/logo.png",
  },
}

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}

        {/* 🌐 Global Floating WhatsApp + Email */}
        <FloatingContact />

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
