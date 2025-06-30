import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Open_Sans } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist in Los Angeles",
  description:
    "Licensed clinical psychologist offering individual and couples therapy in Los Angeles and virtually across California. Specializing in anxiety, relationships, and trauma recovery with 8+ years of experience.",
  keywords:
    "psychologist, therapy, Los Angeles, California, anxiety, relationships, trauma, couples therapy, virtual therapy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased ">{children}</body>
    </html>
  )
}
