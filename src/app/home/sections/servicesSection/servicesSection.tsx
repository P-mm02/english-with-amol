// src/app/home/sections/servicesSection/servicesSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import styles from './servicesSection.module.css'

type ServiceCard = {
  href: string
  imgSrc: string
  imgAlt: string
  tag: string
  titleTh: string
  titleEn: string
  desc: string
}

const SERVICES: ServiceCard[] = [
  {
    href: '/services/MC',
    imgSrc: '/images/courses/course-6.png',
    imgAlt: 'พิธีกรภาษาอังกฤษ (English MC) cover',
    tag: 'Language Services',
    titleTh: 'พิธีกรภาษาอังกฤษ',
    titleEn: 'English MC',
    desc: `ให้บริการพิธีกรภาษาอังกฤษสำหรับงานอีเวนต์ งานองค์กร และงานทางการ โดยใช้ภาษาอังกฤษอย่างเหมาะสมกับบริบท ลักษณะงาน และกลุ่มผู้ฟัง
เน้นการสื่อสารที่ชัดเจน เป็นธรรมชาติ และมีความเป็นมืออาชีพ เพื่อสร้างบรรยากาศที่ดีและช่วยให้งานดำเนินไปอย่างราบรื่น`,
  },
  {
    href: '/services/Interpreter',
    imgSrc: '/images/courses/course-7.png',
    imgAlt: 'ล่ามภาษาอังกฤษ (English Interpreter) cover',
    tag: 'Language Services',
    titleTh: 'ล่ามภาษาอังกฤษ',
    titleEn: 'English Interpreter',
    desc: `บริการล่ามภาษาอังกฤษสำหรับงานประชุม งานอีเวนต์ และการติดต่อธุรกิจ เน้นการสื่อสารที่ชัดเจน ถูกต้อง และเป็นธรรมชาติ เพื่อให้ทั้งสองฝ่ายเข้าใจกันอย่างราบรื่น
ให้บริการล่ามแบบ Consecutive Interpreting (ล่ามพูดสลับ) เหมาะสำหรับการประชุมขนาดเล็ก–กลาง การเจรจาธุรกิจ การสัมภาษณ์ และงานอีเวนต์ที่ต้องการความแม่นยำในการสื่อสาร`,
  },
]

function ServiceCard({ s }: { s: ServiceCard }) {
  return (
    <article className={`card ${styles.card}`}>
      <Link className={styles.cardLink} href={s.href} aria-label={s.titleTh}>
        <div className={styles.media}>
          <Image
            src={s.imgSrc}
            alt={s.imgAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={styles.img}
            priority={false}
          />
          <span className={styles.tag}>{s.tag}</span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{s.titleTh}</h3>
          <p className={styles.subtitle}>{s.titleEn}</p>

          <p className={styles.desc}>{s.desc}</p>

          <div className={styles.bottom}>
            <span className={styles.cta}>ดูรายละเอียด</span>
            <span className={styles.arrow} aria-hidden="true">
              {'>'}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className={`section ${styles.services}`}
      aria-label="Language services"
    >
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>บริการด้านภาษา</h2>
          <p className={styles.sub}>(Language Services)</p>
        </header>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <ServiceCard key={s.href} s={s} />
          ))}
        </div>

        <div className={styles.foot}>
          <a className="btn btnPrimary" href="/#contact">
            ติดต่อ / ขอใบเสนอราคา
          </a>
        </div>
      </div>
    </section>
  )
}
