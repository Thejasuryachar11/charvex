import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })

export const metadata: Metadata = {
  title: "Charvex - IT Consulting & Technology",
  description:
    "Enterprise IT consulting, AI solutions, web development, ERP systems, and cloud infrastructure",
  generator: "v0.app",
  icons: {
    icon: "/logo.png", // ✅ Path to your logo inside the /public folder
  },
}
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Optional: fallback for browsers that don't auto-detect metadata icons */}
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
