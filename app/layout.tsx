import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oluwatobi Olajide | Portfolio',
  description: 'I build from first principles. Simple, traceable systems that run, test, and last.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <div className="mx-auto max-w-3xl px-4">
          {children}
        </div>
      </body>
    </html>
  )
}
