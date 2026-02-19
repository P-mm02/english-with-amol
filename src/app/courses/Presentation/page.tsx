// src/app/courses/Presentation/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'Public Speaking & Presentation — English With Amol',
  description:
    'แพ็กเกจฝึกพรีเซนต์และพูดในที่สาธารณะรวม 5 ชั่วโมง สำหรับผู้ที่ต้องการพัฒนาทั้งโครงสร้างการนำเสนอ ความมั่นใจ และการสื่อสารให้ดูเป็นมืออาชีพ',
  openGraph: {
    title: 'Public Speaking & Presentation — English With Amol',
    description:
      'แพ็กเกจฝึกพรีเซนต์และพูดในที่สาธารณะรวม 5 ชั่วโมง สำหรับผู้ที่ต้องการพัฒนาทั้งโครงสร้างการนำเสนอ ความมั่นใจ และการสื่อสารให้ดูเป็นมืออาชีพ',
    type: 'website',
    images: [{ url: '/images/courses/course-5.png' }],
  },
}

const slides: Slide[] = [
  {
    src: '/images/courses/course-5.png',
    alt: 'ภาษาอังกฤษสำหรับการพรีเซนต์ Public Speaking & Presentation',
    caption: 'Public Speaking & Presentation',
    priority: true,
  },
]

type OutlineItem = {
  hour: string
  title: string
  bullets: string[]
}

const course = {
  level: 'Public Speaking',
  titleTh: 'ภาษาอังกฤษสำหรับการพรีเซนต์ Public Speaking & Presentation',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'แพ็กเกจฝึกพรีเซนต์และพูดในที่สาธารณะรวม 5 ชั่วโมง สำหรับผู้ที่ต้องการพัฒนาทั้งโครงสร้างการนำเสนอ ความมั่นใจ และการสื่อสารให้ดูเป็นมืออาชีพ',
    'ผู้เรียนจะได้เรียนรู้การเปิด–จัดลำดับเนื้อหา–สรุปอย่างมีพลัง พร้อมฝึกพรีเซนต์จริงและรับฟีดแบ็กแบบละเอียดรายบุคคล เน้นปรับคำพูด การออกเสียง น้ำเสียง และการตอบคำถามหลังการนำเสนอ (Q&A)',
    'สามารถแบ่งเรียนได้ตามความสะดวก และนำสไลด์จริงมาฝึกในคลาส',
  ],

  whoTitle: 'เหมาะสำหรับใคร',
  whoItsFor: [
    'นักเรียน / นักศึกษาที่ต้องพรีเซนต์งานเป็นภาษาอังกฤษ',
    'ผู้ที่เตรียมสอบพรีเซนต์ / Project / Defense',
    'คนทำงานที่ต้องนำเสนอโปรเจกต์หรือประชุมภาษาอังกฤษ',
    'ผู้ที่รู้เนื้อหาแล้ว แต่ยังไม่มั่นใจในการพูด',
    'ผู้ที่ต้องการพัฒนาทักษะ Public Speaking ระดับ B1–B2',
  ],

  getTitle: 'สิ่งที่จะได้รับ',
  whatYouGet: [
    'โครงสร้างการพรีเซนต์แบบมืออาชีพ (Opening–Body–Conclusion)',
    'Template ประโยคสำหรับเปิด–เชื่อม–สรุปการนำเสนอ',
    'เทคนิคจัดลำดับเนื้อหาให้ชัดเจนและเข้าใจง่าย',
    'การปรับคำพูดให้กระชับ เป็นธรรมชาติ และดูมั่นใจ',
    'ฝึกออกเสียง Stress / Intonation ให้ฟังง่าย',
    'จำลองการพรีเซนต์เต็มรูปแบบ พร้อมฝึกตอบคำถาม (Q&A)',
    'ฟีดแบ็กละเอียดรายบุคคล ปรับตามจุดแข็ง–จุดอ่อนของผู้เรียน',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'มีบริการรายชั่วโมงสำหรับ Mock Presentation',
    'เหมาะสำหรับผู้ที่ต้องการซ้อมก่อนวันจริงแบบเร่งด่วน',
    'โฟกัสเฉพาะการปรับคำพูดให้กระชับและเป็นธรรมชาติ',
    'ฝึกออกเสียงให้ชัดเจน ฟังง่าย และมั่นใจมากขึ้น',
    'ฝึกตอบคำถามหลังการนำเสนอ (Q&A Practice)',
    'ไม่ได้สอนเนื้อหาใหม่ แต่เน้นการปรับและพัฒนาการนำเสนอของผู้เรียนโดยเฉพาะ',
  ],

  outlineTitle: 'โครงสร้างคอร์สเรียน (Course Outline)',
  outline: [
    {
      hour: 'ชั่วโมงที่ 1',
      title: 'Strong Openings',
      bullets: [
        'เรียนรู้เทคนิคการเปิดพรีเซนต์ให้น่าสนใจ',
        'วิเคราะห์ตัวอย่างคลิปสั้น ๆ',
        'ฝึกสร้าง Opening 2–3 รูปแบบ (Question / Story / Statistic)',
        'ปรับคำพูดให้กระชับและดูมืออาชีพ',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 2',
      title: 'Organizing the Body',
      bullets: [
        'เรียนรู้โครงสร้างการจัดลำดับเนื้อหา (Clear Structure)',
        'เขียน Body section ให้มี 2–3 main points ชัดเจน',
        'ใช้ Linking words ให้การนำเสนอลื่นไหล',
        'ฝึกอธิบายข้อมูล / กราฟ / ตัวเลข',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 3',
      title: 'Powerful Conclusions',
      bullets: [
        'เทคนิคการสรุปให้น่าจดจำ',
        'เขียน Conclusion ที่ชัดเจนและมี Impact',
        'ฝึก Call to action / Key takeaway',
        'ปรับคำพูดให้ดูมั่นใจและหนักแน่น',
      ],
    },
    {
      hour: 'ชั่วโมงที่  4–5',
      title: 'Full Practice + Feedback',
      bullets: [
        'จำลองการพรีเซนต์เต็มรูปแบบ',
        'จับเวลาเหมือนสถานการณ์จริง',
        'ฝึกตอบคำถาม (Q&A session)',
        'ปรับคำพูด การออกเสียง น้ำเสียง และภาษากาย',
        'รับฟีดแบ็กแบบละเอียดรายบุคคล',
      ],
    },
  ] as OutlineItem[],
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

export default function PresentationCoursePage() {
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
          <div className={styles.heroMedia} aria-label="Course image gallery">
            <div className={styles.heroSlider}>
              <Slider
                slides={slides}
                ariaLabel={`${course.titleTh} image gallery`}
                intervalMs={4500}
              />
            </div>
            <div className={styles.heroOverlay} aria-hidden="true" />
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badges}>
              <span className={styles.level}>{course.level}</span>
            </div>

            <h1 className={styles.h1}>{course.titleTh}</h1>

            <div className={styles.heroActions}>
              <a className="btn btnPrimary" href="/#contact">
                สมัครเรียน / ติดต่อ
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
            <section
              className={`card ${styles.block}`}
              aria-label="Description details"
            >
              <div className={styles.descHead}>
                <h2 className={styles.descTitleEn}>
                  {course.descriptionTitleEn}
                </h2>
                <p className={styles.descTitleTh}>
                  {course.descriptionTitleTh}
                </p>
              </div>

              <div className={styles.descSection}>
                <Bullets items={course.description} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{course.whoTitle}</h3>
                <Bullets items={course.whoItsFor} />
              </div>

              <div className={styles.descSection}>
                <h3 className={styles.sectionTitle}>{course.getTitle}</h3>
                <Bullets items={course.whatYouGet} />
              </div>

              <hr className={styles.divider} />

              <div className={styles.descSection}>
                <h3 className={styles.pleaseNote}>{course.noteTitle}</h3>
                <Bullets items={course.pleaseNote} />
              </div>
            </section>

            <section className={`card ${styles.block}`} aria-label="Outline">
              <h2 className={styles.blockTitle}>{course.outlineTitle}</h2>

              <div className={styles.outline}>
                {course.outline.map((o) => (
                  <article
                    key={`${o.hour}-${o.title}`}
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
          </div>

          {/* SIDE */}
          <aside className={styles.side} aria-label="Sidebar summary">
            <div className={`glass ${styles.sticky}`}>
              <h3 className={styles.sideTitle}>สรุปคอร์ส</h3>

              <div className={styles.pills}>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>รูปแบบ</span>
                  <span className={styles.pillValueStrong}>{course.level}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>จำนวนชั่วโมง</span>
                  <span className={styles.pillValueStrong}>5 ชั่วโมง</span>
                </div>
              </div>

              <div className={styles.sideActions}>
                <a className="btn btnPrimary" href="/#contact">
                  สมัครเรียน
                </a>
                <a className="btn btnBlue" href="/#contact">
                  ขอรายละเอียดเพิ่มเติม
                </a>
              </div>

              <p className={styles.note}>
                * สามารถแบ่งเรียนได้ตามความสะดวก และนำสไลด์จริงมาฝึกในคลาส
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
