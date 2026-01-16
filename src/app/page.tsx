// src/app/page.tsx
import type { Metadata } from 'next'
import PageClient from './pageClient'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'English With Amol | English Tutor',
    template: '%s | English With Amol',
  },
  description:
    'English With Amol — structured, friendly English tutoring. Speak with confidence, step by step.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'English With Amol | English Tutor',
    description:
      'Structured, friendly tutoring. Real speaking practice and steady progress.',
    url: SITE_URL,
    siteName: 'English With Amol',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function Page() {
  return <PageClient />
}
