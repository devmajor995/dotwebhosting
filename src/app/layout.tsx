import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Dot Web Hosting - Your Domain. Our Priority.',
  description: 'Professional web hosting solutions with 99.9% uptime guarantee. Shared hosting, VPS, dedicated servers, and domain services. Fast, secure, and affordable hosting for your business.',
  keywords: 'web hosting, domain registration, VPS hosting, dedicated servers, shared hosting, WordPress hosting, reseller hosting, Nigeria hosting',
  authors: [{ name: 'Dot Web Hosting' }],
  openGraph: {
    title: 'Dot Web Hosting - Your Domain. Our Priority.',
    description: 'Professional web hosting solutions with 99.9% uptime guarantee. Fast, secure, and affordable hosting for your business.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dot Web Hosting - Your Domain. Our Priority.',
    description: 'Professional web hosting solutions with 99.9% uptime guarantee.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
