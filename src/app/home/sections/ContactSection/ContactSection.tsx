// src/app/home/sections/ContactSection/ContactSection.tsx
'use client'

import { useState } from 'react'
import styles from './ContactSection.module.css'
import ContactsBox from '@/components/ContactsBox/ContactsBox'

const CONTACT = {
  name: 'Amol',
  lineId: '@401xrgdv',
  tiktok: 'amolnat',
  instagram: 'english_with_amol',
  facebook: 'อิ้งกะมล',
  phone: '062-779-0770',
  email: 'amolnat18@gmail.com',
} as const

type ContactKey = keyof typeof CONTACT

type Row = {
  label: string
  key: ContactKey
  copy: string
}

function IconCopy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CopyIconButton({
  value,
  ariaLabel,
  className,
}: {
  value: string
  ariaLabel: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = value
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }

    setCopied(true)
    window.setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onCopy}
      aria-label={ariaLabel}
    >
      {copied ? <IconCheck /> : <IconCopy />}
    </button>
  )
}

export default function ContactSection() {
  const rows: Row[] = [
    { label: 'ชื่อ', key: 'name', copy: CONTACT.name },
    { label: 'LINE ID', key: 'lineId', copy: CONTACT.lineId },
    { label: 'TikTok', key: 'tiktok', copy: CONTACT.tiktok },
    { label: 'IG', key: 'instagram', copy: CONTACT.instagram },
    { label: 'Facebook', key: 'facebook', copy: CONTACT.facebook },
    { label: 'โทร', key: 'phone', copy: CONTACT.phone },
    { label: 'อีเมล', key: 'email', copy: CONTACT.email },
  ]

  return (
    <section
      id="contact"
      className={`section ${styles.contact}`}
      aria-label="Contact"
    >
      <div className="container">
        <div className={`glass ${styles.panel}`}>
          <header className={styles.head}>
            <h2 className={styles.h2}>ติดต่อ</h2>
            <p className={styles.sub}>
              แจ้งเป้าหมายการเรียน ทักษะปัจจุบัน
              หรือติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่
            </p>
          </header>

          <div className={styles.ContactBox}>
            <section
              className={`card ${styles.info}`}
              aria-label="Contact details"
            >
              <p className={styles.label}>ข้อมูลติดต่อ</p>

              <div className={styles.rows}>
                {rows.map((r) => {
                  const value = CONTACT[r.key]
                  return (
                    <div key={r.key} className={styles.row}>
                      <div className={styles.k}>{r.label}</div>

                      <div className={styles.vInline}>
                        <span className={styles.code}>{value}</span>

                        <CopyIconButton
                          className={styles.copyBtn}
                          value={r.copy}
                          ariaLabel={`คัดลอก ${r.label}`}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            <div className={styles.box}>
              <ContactsBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
