// src/app/pageClient.tsx
'use client'

import { useEffect, useMemo, useState } from 'react'
import styles from './page.module.css'

import HeroSection from './home/sections/HeroSection/HeroSection'
import CoursesSection from './home/sections/CoursesSection/CoursesSection'
import TeachingExample from './home/sections/TeachingExample/TeachingExample'
import FaqSection from './home/sections/FaqSection/FaqSection'
import ContactSection from './home/sections/ContactSection/ContactSection'

type NavItem = { id: string; label: string }

export default function PageClient() {
  const nav = useMemo<NavItem[]>(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'courses', label: 'Courses' },
      { id: 'TeachingExample', label: 'TeachingExample' },
      { id: 'faq', label: 'FAQ' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  const [active, setActive] = useState(nav[0]?.id || 'home')

  useEffect(() => {
    const els = nav
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0]
        if (best?.target?.id) setActive(best.target.id)
      },
      { threshold: [0.18, 0.28, 0.4, 0.55] }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [nav])

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className={styles.page}>
      {/* Sections */}
      <HeroSection />
      <CoursesSection />
      <TeachingExample />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
