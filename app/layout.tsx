import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Belén Gómez | Influencer & Creadora de Contenido",
  description: "Portfolio profesional de Belén Gómez, influencer y creadora de contenido de Uruguay",
    generator: 'Rodrigo Rey ;)'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}



import './globals.css'