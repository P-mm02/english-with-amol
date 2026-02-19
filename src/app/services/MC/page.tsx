// src/app/services/MC/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'พิธีกรภาษาอังกฤษ (English MC) — English With Amol',
  description:
    'ให้บริการพิธีกรภาษาอังกฤษสำหรับงานอีเวนต์ งานองค์กร และงานทางการ โดยใช้ภาษาอังกฤษอย่างเหมาะสมกับบริบท ลักษณะงาน และกลุ่มผู้ฟัง',
  openGraph: {
    title: 'พิธีกรภาษาอังกฤษ (English MC) — English With Amol',
    description:
      'ให้บริการพิธีกรภาษาอังกฤษสำหรับงานอีเวนต์ งานองค์กร และงานทางการ โดยใช้ภาษาอังกฤษอย่างเหมาะสมกับบริบท ลักษณะงาน และกลุ่มผู้ฟัง',
    type: 'website',
    images: [{ url: '/images/courses/course-6.png' }],
  },
}

const slides: Slide[] = [
  {
    src: '/images/courses/course-6.png',
    alt: 'บริการด้านภาษา (Language Services) พิธีกรภาษาอังกฤษ (English MC)',
    caption: 'พิธีกรภาษาอังกฤษ (English MC)',
    priority: true,
  },
]

const service = {
  level: 'Language Services',
  titleTh: 'พิธีกรภาษาอังกฤษ (English MC)',
  titleEn: 'พิธีกรภาษาอังกฤษ (English MC)',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'ให้บริการพิธีกรภาษาอังกฤษสำหรับงานอีเวนต์ งานองค์กร และงานทางการ โดยใช้ภาษาอังกฤษอย่างเหมาะสมกับบริบท ลักษณะงาน และกลุ่มผู้ฟัง',
    'เน้นการสื่อสารที่ชัดเจน เป็นธรรมชาติ และมีความเป็นมืออาชีพ เพื่อสร้างบรรยากาศที่ดีและช่วยให้งานดำเนินไปอย่างราบรื่น',
  ],

  supportTitle: 'ประเภทงานที่รองรับ',
  supportList: [
    'งานอีเวนต์และงานเปิดตัว',
    'งานองค์กร / Corporate Event',
    'งานสัมมนาและงานประชุม',
    'งานที่มีผู้ร่วมงานชาวต่างชาติ',
    'งานทางการที่ต้องการโทนภาษาเป็นมืออาชีพ',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'สามารถให้บริการทั้งงานขนาดเล็กและงานองค์กร',
    'กรุณาแจ้งรายละเอียดงานล่วงหน้าเพื่อเตรียมสคริปต์และประเมินค่าบริการ',
    'ค่าบริการขึ้นอยู่กับลักษณะงาน ระยะเวลา และสถานที่จัดงาน',
  ],
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((t) => (
        <li key={t} className={styles.bulletLi}>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function EnglishMCServicePage() {
  return (
    <main className={`section ${styles.page}`} aria-label="Service details">
      <div className={`container ${styles.container}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link className={styles.crumb} href="/#services">
            บริการด้านภาษา
          </Link>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <span className={styles.current}>{service.titleEn}</span>
        </nav>

        <header className={styles.hero} aria-label="Service header">
          <div className={styles.heroMedia} aria-label="Service image">
            <div className={styles.heroSlider}>
              <Slider
                slides={slides}
                ariaLabel={`${service.titleEn} image`}
                intervalMs={4500}
              />
            </div>
            <div className={styles.heroOverlay} aria-hidden="true" />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badges}>
              <span className={styles.level}>{service.level}</span>
            </div>

            <h1 className={styles.h1}>{service.titleTh}</h1>

            <div className={styles.heroActions}>
              <a className="btn btnPrimary" href="/#contact">
                ติดต่อ / ขอใบเสนอราคา
              </a>
              <Link className="btn btnBlue" href="/#services">
                กลับไปดูบริการ
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.grid} aria-label="Service content">
          {/* MAIN */}
          <div className={styles.main}>
            <section
              className={`card ${styles.block}`}
              aria-label="Description details"
            >
              <div className={styles.descHead}>
                <h2 className={styles.descTitleEn}>
                  {service.descriptionTitleEn}
                </h2>
                <p className={styles.descTitleTh}>
                  {service.descriptionTitleTh}
                </p>
              </div>

              <div className={styles.descSection}>
                <Bullets items={service.description} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{service.supportTitle}</h3>
                <Bullets items={service.supportList} />
              </div>

              <hr className={styles.divider} />

              <div className={styles.descSection}>
                <h3 className={styles.pleaseNote}>{service.noteTitle}</h3>
                <Bullets items={service.pleaseNote} />
              </div>
            </section>
          </div>

          {/* SIDE */}
          <aside className={styles.side} aria-label="Sidebar summary">
            <div className={`glass ${styles.sticky}`}>
              <h3 className={styles.sideTitle}>สรุปบริการ</h3>

              <div className={styles.pills}>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ประเภท</span>
                  <span className={styles.pillValueStrong}>
                    {service.level}
                  </span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>บริการ</span>
                  <span className={styles.pillValueStrong}>
                    {service.titleEn}
                  </span>
                </div>
              </div>

              <div className={styles.sideActions}>
                <a className="btn btnPrimary" href="/#contact">
                  ติดต่อ
                </a>
                <a className="btn btnBlue" href="/#contact">
                  ขอรายละเอียดเพิ่มเติม
                </a>
              </div>

              <p className={styles.note}>
                *
                กรุณาแจ้งรายละเอียดงานล่วงหน้าเพื่อเตรียมสคริปต์และประเมินค่าบริการ
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
