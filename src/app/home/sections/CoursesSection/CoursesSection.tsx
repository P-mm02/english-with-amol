// src/app/home/sections/CoursesSection/CoursesSection.tsx
import Image from 'next/image'
import Link from 'next/link'
import styles from './CoursesSection.module.css'
import coursesData from './Course.json'

type Course = {
  id: string
  level?: string
  titleTh: string
  titleEn?: string
  summary?: string
  durationLabel?: string
  cover?: { src: string; alt?: string }
  format?: { labelTh?: string }
  pricing?: { main?: { display?: string } }
  cta?: { secondaryHrefTemplate?: string; primaryHref?: string }
  isActive?: boolean
}

const COURSES = (coursesData as Course[]).filter((c) => c.isActive !== false)

function detailHref(c: Course) {
  return `/home/sections/CoursesSection/${c.id}`
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
            <article key={c.id} className={`card ${styles.card}`}>
              <div className={styles.media}>
                <Image
                  src={
                    c.cover?.src || '/images/hero/hero-english-with-amol.jpg'
                  }
                  alt={c.cover?.alt || `${c.titleTh} cover`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={styles.img}
                  priority={false}
                />
                {c.level ? (
                  <span className={styles.level}>{c.level}</span>
                ) : null}
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{c.titleTh}</h3>
                {c.titleEn ? (
                  <p className={styles.subtitle}>{c.titleEn}</p>
                ) : null}

                {c.summary ? <p className={styles.desc}>{c.summary}</p> : null}

                <div className={styles.meta}>
                  {c.durationLabel ? (
                    <span className={styles.pill}>{c.durationLabel}</span>
                  ) : null}
                  {c.format?.labelTh ? (
                    <span className={styles.pill}>{c.format.labelTh}</span>
                  ) : null}
                </div>

                <div className={styles.bottom}>
                  <p className={styles.price}>
                    {c.pricing?.main?.display || 'สอบถามราคา'}
                  </p>

                  <div className={styles.actions}>
                    <Link className="btn btnBlue" href={detailHref(c)}>
                      ดูรายละเอียด
                    </Link>
                    <a className="btn" href="#contact">
                      ติดต่อ
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
