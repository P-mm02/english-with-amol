// src/components/Nav/Nav.tsx
'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import styles from './Nav.module.css'
import ContactsBox from '@/components/ContactsBox/ContactsBox'

type NavItem = { id: string; label: string }

export default function Nav() {
  const links = useMemo<NavItem[]>(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'courses', label: 'Courses' },
      { id: 'Teaching', label: 'Teaching' },
      { id: 'faq', label: 'FAQ' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  )

  const router = useRouter()
  const pathname = usePathname()

  const [open, setOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  const jump = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)

    const isHome = pathname === '/'

    if (!isHome) {
      // go back to home with hash
      router.push(`/#${id}`)
      return
    }

    // already on home -> smooth scroll
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Lock scroll when drawer is open (mobile)
  useEffect(() => {
    const prev = document.body.style.overflow
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1025) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Focus close button when open
  useEffect(() => {
    if (open) closeBtnRef.current?.focus()
  }, [open])

  return (
    <>
      <div className={styles.navSpacer} aria-hidden="true" />

      <header className={styles.navWrap}>
        <div className={styles.nav}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="English With Amol"
          >
            <div className={styles.logo}>
              <Image
                src="/logo/logo.svg"
                alt="English With Amol logo"
                width={237}
                height={93}
                priority
              />
            </div>
          </Link>

          <nav className={styles.links} aria-label="Primary navigation">
            {links.map((l) => (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={jump(l.id)}
                className={styles.link}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobileDrawer"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burgerBars} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>

        <aside
          id="mobileDrawer"
          className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
          aria-hidden={!open}
        >
          <nav className={styles.drawerNav} aria-label="Mobile navigation">
            {links.map((l) => (
              <a
                key={l.id}
                href={`/#${l.id}`}
                onClick={jump(l.id)}
                className={styles.drawerLink}
              >
                <span className={styles.dot} aria-hidden="true" />
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.drawerFoot}>
            <ContactsBox />
          </div>
        </aside>
      </header>
    </>
  )
}
