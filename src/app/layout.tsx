// src/app/layout.tsx
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import '@/styles/globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://english-with-amol.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070714',
  colorScheme: 'dark',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Default metadata (your page.tsx can override as needed)
  title: {
    default: 'English With Amol | English Tutor',
    template: '%s | English With Amol',
  },
  description:
    'English With Amol — structured, friendly English tutoring. Speak with confidence, step by step.',

  alternates: { canonical: '/' },

  // Favicons (adjust to your real files in /public)
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },

  openGraph: {
    title: 'English With Amol | English Tutor',
    description:
      'Structured, friendly tutoring. Real speaking practice and steady progress.',
    url: SITE_URL,
    siteName: 'English With Amol',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/images/preview/og.jpg',
        width: 1200,
        height: 630,
        alt: 'English With Amol — English Tutor',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'English With Amol | English Tutor',
    description:
      'Structured, friendly tutoring. Real speaking practice and steady progress.',
    images: ['/images/preview/og.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th">
      <Nav />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
