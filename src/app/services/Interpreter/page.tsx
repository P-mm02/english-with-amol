// src/app/services/Interpreter/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'ล่ามภาษาอังกฤษ (English Interpreter) — English With Amol',
  description:
    'บริการล่ามภาษาอังกฤษสำหรับงานประชุม งานอีเวนต์ และการติดต่อธุรกิจ เน้นการสื่อสารที่ชัดเจน ถูกต้อง และเป็นธรรมชาติ เพื่อให้ทั้งสองฝ่ายเข้าใจกันอย่างราบรื่น',
  openGraph: {
    title: 'ล่ามภาษาอังกฤษ (English Interpreter) — English With Amol',
    description:
      'บริการล่ามภาษาอังกฤษสำหรับงานประชุม งานอีเวนต์ และการติดต่อธุรกิจ เน้นการสื่อสารที่ชัดเจน ถูกต้อง และเป็นธรรมชาติ เพื่อให้ทั้งสองฝ่ายเข้าใจกันอย่างราบรื่น',
    type: 'website',
    images: [{ url: '/images/courses/course-7.png' }],
  },
}

const slides: Slide[] = [
  {
    src: '/images/courses/course-7.png',
    alt: 'บริการด้านภาษา (Language Services) ล่ามภาษาอังกฤษ (English Interpreter)',
    caption: 'ล่ามภาษาอังกฤษ (English Interpreter)',
    priority: true,
  },
]

const service = {
  level: 'Language Services',
  titleTh: 'ล่ามภาษาอังกฤษ (English Interpreter)',
  titleEn: 'ล่ามภาษาอังกฤษ (English Interpreter)',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'บริการล่ามภาษาอังกฤษสำหรับงานประชุม งานอีเวนต์ และการติดต่อธุรกิจ เน้นการสื่อสารที่ชัดเจน ถูกต้อง และเป็นธรรมชาติ เพื่อให้ทั้งสองฝ่ายเข้าใจกันอย่างราบรื่น',
    'ให้บริการล่ามแบบ Consecutive Interpreting (ล่ามพูดสลับ) เหมาะสำหรับการประชุมขนาดเล็ก–กลาง การเจรจาธุรกิจ การสัมภาษณ์ และงานอีเวนต์ที่ต้องการความแม่นยำในการสื่อสาร',
  ],

  coverTitle: 'บริการครอบคลุม',
  coverList: [
    'ล่ามในงานประชุม / สัมมนา',
    'ล่ามเจรจาธุรกิจ',
    'ล่ามติดต่อองค์กรหรือบริษัทต่างประเทศ',
    'ล่ามในงานอีเวนต์',
    'ล่ามสื่อสารระหว่างบุคคล (Consecutive Interpreting)',
  ],

  workTitle: 'ประวัติการทำงานล่าม',
  workText: [
    'มีประสบการณ์ล่ามในงานระดับนานาชาติ งานประชุมธุรกิจ และงานแสดงสินค้าหลากหลายประเภท โดยเน้นการสื่อสารเชิงธุรกิจอย่างมืออาชีพ',
  ],

  expTitle: 'ประสบการณ์สำคัญ',
  expList: [
    'ล่ามในงาน World HAPEX Thailand',
    'งานแสดงสินค้าและการเจรจาธุรกิจระดับนานาชาติ',
    'ล่ามในงาน Business Matching จังหวัดปัตตานี',
    'ประสานงานและสื่อสารระหว่างผู้ประกอบการไทยและต่างประเทศ',
    'ล่ามในงาน PATA Destination Marketing Forum',
    'งานประชุมด้านการท่องเที่ยวระดับนานาชาติ',
    'ล่ามในงาน Business Conference',
    'Healthy Living & Innovation Expo',
    'ล่ามเจรจาธุรกิจ (Formal International Negotiation)',
    'สนับสนุนการสื่อสารในบริบททางธุรกิจระดับสากล',
    'ล่ามในงาน Business Conference และงานแสดงสินค้าภาคอีสาน',
    'ณ ศูนย์ประชุมนานาชาติ',
    'มีประสบการณ์ร่วมงานกับผู้แทนและนักธุรกิจจากหลากหลายประเทศ',
  ],

  formatTitle: 'รูปแบบการให้บริการ',
  formatList: [
    'บริการล่ามออนไลน์ (Online)',
    'บริการล่ามนอกสถานที่ / Office / งานอีเวนต์',
    'รองรับงานประชุม การติดต่อธุรกิจ และการสื่อสารระหว่างบุคคล',
    'ให้บริการล่ามแบบ Consecutive Interpreting (ล่ามพูดสลับ)',
  ],

  highlightTitle: 'จุดเด่นของบริการ',
  highlightList: [
    'สื่อสารชัดเจน เข้าใจบริบททางธุรกิจ',
    'ปรับโทนภาษาให้เหมาะกับสถานการณ์',
    'มีความเป็นมืออาชีพและรักษาความลับของข้อมูล',
    'ตรียมตัวล่วงหน้าตามรายละเอียดงาน',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'ราคาเริ่มต้น 300 บาท',
    'ค่าบริการขึ้นอยู่กับลักษณะงาน ระยะเวลา และสถานที่',
    'มีบริการจัดหาล่ามตามความเหมาะสมของงาน',
    'คัดเลือกและประสานงานล่ามคุณภาพ',
    'กรุณาแจ้งรายละเอียดงานล่วงหน้าเพื่อประเมินราคาอย่างเหมาะสม',
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

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className={styles.paras}>
      {items.map((t) => (
        <p key={t} className={styles.p}>
          {t}
        </p>
      ))}
    </div>
  )
}

export default function InterpreterServicePage() {
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
                <h3 className={styles.sectionTitle}>{service.coverTitle}</h3>
                <Bullets items={service.coverList} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{service.workTitle}</h3>
                <Paragraphs items={service.workText} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{service.expTitle}</h3>
                <Bullets items={service.expList} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{service.formatTitle}</h3>
                <Bullets items={service.formatList} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>
                  {service.highlightTitle}
                </h3>
                <Bullets items={service.highlightList} />
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
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ราคาเริ่มต้น</span>
                  <span className={styles.pillValueStrong}>300 บาท</span>
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
                * กรุณาแจ้งรายละเอียดงานล่วงหน้าเพื่อประเมินราคาอย่างเหมาะสม
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
