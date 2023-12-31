import type { Metadata } from "next"

import "./globals.css"

import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <TailwindIndicator />
        <SpeedInsights />
      </body>
    </html>
  )
}
