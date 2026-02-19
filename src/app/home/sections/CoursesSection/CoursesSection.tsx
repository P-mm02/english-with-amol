// src/app/home/sections/CoursesSection/CoursesSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import styles from './CoursesSection.module.css'

type CourseCard = {
  href: string
  imgSrc: string
  imgAlt: string
  level: string
  titleTh: string
  titleEn: string
}

const COURSES: CourseCard[] = [
  {
    href: '/courses/A1',
    imgSrc: '/images/courses/course-1.png',
    imgAlt: 'คอร์สปรับพื้นฐานภาษาอังกฤษ (A1) cover',
    level: 'A1',
    titleTh: 'คอร์สปรับพื้นฐานภาษาอังกฤษ',
    titleEn: 'Basic English Foundation Course A1',
  },
  {
    href: '/courses/A2',
    imgSrc: '/images/courses/course-2.png',
    imgAlt: 'คอร์สพูดภาษาอังกฤษ สำหรับผู้เริ่มต้น–มีพื้นฐานเล็กน้อย (A2) cover',
    level: 'A2',
    titleTh: 'คอร์สพูดภาษาอังกฤษ สำหรับผู้เริ่มต้น–มีพื้นฐานเล็กน้อย',
    titleEn: 'Speaking Class',
  },
  {
    href: '/courses/B1-B2',
    imgSrc: '/images/courses/course-3.png',
    imgAlt: 'เรียนตามระดับ (B1-B2) cover',
    level: 'B1-B2',
    titleTh: 'เรียนตามระดับ',
    titleEn: 'Intermediate to Upper-Intermediate',
  },
  {
    href: '/courses/Interview',
    imgSrc: '/images/courses/course-4.png',
    imgAlt: 'ภาษาอังกฤษสำหรับการสัมภาษณ์ (Interview) cover',
    level: 'Interview',
    titleTh: 'ภาษาอังกฤษสำหรับการสัมภาษณ์',
    titleEn: 'Interview English',
  },
  {
    href: '/courses/Presentation',
    imgSrc: '/images/courses/course-5.png',
    imgAlt: 'ภาษาอังกฤษสำหรับการพรีเซนต์ (Presentation) cover',
    level: 'Presentation',
    titleTh: 'ภาษาอังกฤษสำหรับการพรีเซนต์',
    titleEn: 'Public Speaking & Presentation',
  },
]

function CourseCard({ c }: { c: CourseCard }) {
  return (
    <article className={`card ${styles.card}`}>
      <Link className={styles.cardLink} href={c.href} aria-label={c.titleTh}>
        <div className={styles.media}>
          <Image
            src={c.imgSrc}
            alt={c.imgAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className={styles.img}
            priority={false}
          />
          <span className={styles.level}>{c.level}</span>
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{c.titleTh}</h3>
          <p className={styles.subtitle}>{c.titleEn}</p>

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

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className={`section ${styles.courses}`}
      aria-label="Courses"
    >
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>คอร์สเรียน</h2>
          <p className={styles.sub}>
            เลือกเส้นทางที่ชัดเจน เรียนแบบใช้งานจริง พร้อม Feedback
          </p>
        </header>

        <div className={styles.grid}>
          {COURSES.map((c) => (
            <CourseCard key={c.href} c={c} />
          ))}
        </div>

        <div className={styles.foot}>
          <a className="btn btnPrimary" href="/#contact">
            สมัครเรียน / ติดต่อ
          </a>
        </div>
      </div>
    </section>
  )
}
