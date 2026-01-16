// src/components/Footer/Footer.tsx
import Link from 'next/link'
import styles from './Footer.module.css'
import Image from 'next/image'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        <div>
          {/* Brand */}
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

          <p className={styles.brandSub}>
            การสอนภาษาอังกฤษแบบเป็นระบบและเป็นกันเอง — ทีละขั้นตอน
          </p>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {YEAR} English With Amol</p>
          <p className={styles.small}>
            Built with Next.js by{' '}
            <a
              href="https://vetra.asia"
              style={{
                background:
                  'linear-gradient(90deg, rgb(0, 141, 212), rgb(105, 49, 209))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 900,
                textDecoration: 'none',
                WebkitTextStroke: '0.6px rgba(10, 8, 25, 0.6)',
                textShadow:
                  '0 1px 0 rgba(255,255,255,0.3), 0 6px 16px rgba(70, 20, 255, 0.3)',
              }}
            >
              <b>VETRA</b>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
 