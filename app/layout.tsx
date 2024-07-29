import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto, Lora } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const lora = Lora({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Personal Website',
  description: 'Personal website of [Your Name], a machine learning professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}