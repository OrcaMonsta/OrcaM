import React from 'react'
import type { Metadata } from 'next'
<<<<<<< HEAD
import './globals.css'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../public/cornerstone.ttf',
  variable: '--font-cornerstone',
  display: 'swap',
  preload: true
})
=======
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

>>>>>>> 4ce5a324ecba300cddb21860b7577723c390dafb

export const metadata: Metadata = {
  title: 'Orca Monsta',
  description: 'Step into the trenches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className={cornerstone.className}>
      <body>
        <div id="app-root">
          {children}
        </div>
      </body>
=======
    <html lang="en">
      
      <body>{children}</body>
>>>>>>> 4ce5a324ecba300cddb21860b7577723c390dafb
    </html>
  )
}