// src/app/home/sections/CoursesSection/[id]/page.tsx
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

type OutlineItem = {
  hour: string
  title: string
  bullets: string[]
}

type PriceOption = {
  type: string
  labelTh: string
  amount: number | null
  display: string
  minPeople?: number
}

type Course = {
  id: string
  slug?: string
  isActive?: boolean
  category?: string

  level?: string
  levelCEFR?: string

  titleTh: string
  titleEn?: string
  subtitleTh?: string
  subtitleEn?: string

  cover?: { src: string; alt?: string }
  summary?: string

  durationHours?: number | null
  durationLabel?: string

  format?: {
    type?: string
    labelTh?: string
    labelEn?: string
    platform?: string
  }

  classSize?: {
    type?: string
    labelTh?: string
    min?: number
    max?: number
  }

  pricing?: {
    currency?: string
    main?: { labelTh?: string; amount?: number | null; display?: string }
    options?: PriceOption[]
  }

  whatYouGet?: string[]
  highlights?: string[]

  outlineTitleTh?: string
  outline?: OutlineItem[]

  cta?: {
    primaryTh?: string
    primaryHref?: string
    secondaryTh?: string
    secondaryHrefTemplate?: string
  }
}

function readCourses(): Course[] {
  const filePath = path.join(
    process.cwd(),
    'src/app/home/sections/CoursesSection/Course.json',
  )
  const raw = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(raw) as Course[]
}

function getCourseById(id: string): Course | null {
  const courses = readCourses()
  return courses.find((c) => c.id === id || c.slug === id) ?? null
}

// ✅ Next.js 15: params should be awaited
type PageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const courses = readCourses()
  return courses.filter((c) => c.isActive !== false).map((c) => ({ id: c.id }))
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const course = getCourseById(id)
  if (!course) return { title: 'Course not found' }

  const title = `${course.titleTh} — English With Amol`
  const description =
    course.summary ||
    `${course.titleEn || ''} ${course.durationLabel || ''} ${
      course.format?.labelTh || ''
    }`.trim()

  const ogImage = course.cover?.src || '/images/hero/hero-english-with-amol.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: ogImage }],
    },
  }
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { id } = await params
  const course = getCourseById(id)
  if (!course) notFound()

  const coverSrc =
    course.cover?.src || '/images/hero/hero-english-with-amol.jpg'
  const coverAlt = course.cover?.alt || `${course.titleTh} cover`

  const priceMain = course.pricing?.main?.display || 'สอบถามราคา'
  const priceOptions = course.pricing?.options || []

  const duration = course.durationLabel || 'ปรับตามเป้าหมายผู้เรียน'
  const format = course.format?.labelTh || 'ออนไลน์'
  const classSize = course.classSize?.labelTh || '—'

  const whatYouGet = course.whatYouGet || []
  const highlights = course.highlights || []
  const outline = course.outline || []

  return (
    <main className={`section ${styles.page}`} aria-label="Course details">
      <div className={`container ${styles.container}`}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link className={styles.crumb} href="/#courses">
            คอร์สเรียน
          </Link>
          <span className={styles.sep} aria-hidden="true">
            /
          </span>
          <span className={styles.current}>{course.titleTh}</span>
        </nav>

        <header className={styles.hero} aria-label="Course header">
          <div className={styles.heroMedia} aria-hidden="true">
            <Image
              src={coverSrc}
              alt={coverAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className={styles.heroImg}
              priority
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badges}>
              {course.level ? (
                <span className={styles.level}>{course.level}</span>
              ) : null}
              {course.levelCEFR ? (
                <span className={styles.cefr}>{course.levelCEFR}</span>
              ) : null}
            </div>

            <h1 className={styles.h1}>{course.titleTh}</h1>
            {course.titleEn ? (
              <p className={styles.h2}>{course.titleEn}</p>
            ) : null}
            {course.subtitleTh ? (
              <p className={styles.sub}>{course.subtitleTh}</p>
            ) : null}

            {course.summary ? (
              <p className={styles.desc}>{course.summary}</p>
            ) : null}

            <div className={styles.heroActions}>
              <a className="btn btnPrimary" href="#contact">
                {course.cta?.primaryTh || 'สมัครเรียน / ติดต่อ'}
              </a>
              <Link className="btn btnBlue" href="/#courses">
                กลับไปดูคอร์ส
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.grid} aria-label="Course content">
          {/* MAIN */}
          <div className={styles.main}>
            <section className={`card ${styles.block}`} aria-label="Quick info">
              <h2 className={styles.blockTitle}>ข้อมูลคอร์ส</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ระยะเวลา</span>
                  <span className={styles.infoValue}>{duration}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>รูปแบบ</span>
                  <span className={styles.infoValue}>{format}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ขนาดคลาส</span>
                  <span className={styles.infoValue}>{classSize}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ราคาเริ่มต้น</span>
                  <span className={styles.infoValueStrong}>{priceMain}</span>
                </div>
              </div>

              {priceOptions.length > 0 ? (
                <div className={styles.priceOptions}>
                  <h3 className={styles.subTitle}>ตัวเลือกเพิ่มเติม</h3>
                  <ul className={styles.optionList}>
                    {priceOptions.map((p) => (
                      <li
                        key={`${course.id}-${p.type}`}
                        className={styles.optionItem}
                      >
                        <span className={styles.optionLabel}>{p.labelTh}</span>
                        <span className={styles.optionValue}>{p.display}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>

            {(whatYouGet.length > 0 || highlights.length > 0) && (
              <section className={`card ${styles.block}`} aria-label="Benefits">
                <h2 className={styles.blockTitle}>สิ่งที่ผู้เรียนจะได้รับ</h2>

                <div className={styles.twoCols}>
                  {whatYouGet.length > 0 ? (
                    <div className={styles.col}>
                      <h3 className={styles.subTitle}>รวมในคอร์ส</h3>
                      <ul className={styles.list}>
                        {whatYouGet.map((t) => (
                          <li key={t} className={styles.li}>
                            <span className={styles.dot} aria-hidden="true" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {highlights.length > 0 ? (
                    <div className={styles.col}>
                      <h3 className={styles.subTitle}>จุดเด่น</h3>
                      <ul className={styles.list}>
                        {highlights.map((t) => (
                          <li key={t} className={styles.li}>
                            <span
                              className={styles.dotBlue}
                              aria-hidden="true"
                            />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </section>
            )}

            {outline.length > 0 ? (
              <section className={`card ${styles.block}`} aria-label="Outline">
                <h2 className={styles.blockTitle}>
                  {course.outlineTitleTh || 'โครงสร้างคอร์ส'}
                </h2>

                <div className={styles.outline}>
                  {outline.map((o) => (
                    <article
                      key={`${course.id}-${o.hour}-${o.title}`}
                      className={styles.outlineItem}
                    >
                      <div className={styles.outHead}>
                        <span className={styles.hour}>{o.hour}</span>
                        <span className={styles.outTitle}>{o.title}</span>
                      </div>
                      <ul className={styles.outList}>
                        {o.bullets.map((b) => (
                          <li key={b} className={styles.outLi}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          {/* SIDE */}
          <aside className={styles.side} aria-label="Sidebar summary">
            <div className={`glass ${styles.sticky}`}>
              <h3 className={styles.sideTitle}>สรุปคอร์ส</h3>

              <div className={styles.pills}>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ราคา</span>
                  <span className={styles.pillValueStrong}>{priceMain}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ระยะเวลา</span>
                  <span className={styles.pillValue}>{duration}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>รูปแบบ</span>
                  <span className={styles.pillValue}>{format}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ขนาดคลาส</span>
                  <span className={styles.pillValue}>{classSize}</span>
                </div>
              </div>

              <div className={styles.sideActions}>
                <a className="btn btnPrimary" href="/#contact">
                  {course.cta?.primaryTh || 'สมัครเรียน'}
                </a>
                <a className="btn btnBlue" href="/#contact">
                  ขอรายละเอียดเพิ่มเติม
                </a>
              </div>

              <p className={styles.note}>
                * สอบถามรอบเรียน และแนะนำคอร์สให้เหมาะกับระดับของคุณได้
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
