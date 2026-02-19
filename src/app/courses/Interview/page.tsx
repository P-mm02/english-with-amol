// src/app/courses/Interview/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'ภาษาอังกฤษสำหรับการสัมภาษณ์ — English With Amol',
  description:
    'คลาสติวสัมภาษณ์งานภาษาอังกฤษแบบตัวต่อตัว ออกแบบเฉพาะสำหรับผู้เรียนแต่ละคน เพื่อเตรียมความพร้อมก่อนวันสัมภาษณ์จริง',
  openGraph: {
    title: 'ภาษาอังกฤษสำหรับการสัมภาษณ์ — English With Amol',
    description:
      'คลาสติวสัมภาษณ์งานภาษาอังกฤษแบบตัวต่อตัว ออกแบบเฉพาะสำหรับผู้เรียนแต่ละคน เพื่อเตรียมความพร้อมก่อนวันสัมภาษณ์จริง',
    type: 'website',
    images: [{ url: '/images/courses/course-4.png' }],
  },
}

const slides: Slide[] = [
  {
    src: '/images/courses/course-4.png',
    alt: 'ภาษาอังกฤษสำหรับการสัมภาษณ์',
    caption: 'ภาษาอังกฤษสำหรับการสัมภาษณ์',
    priority: true,
  },
]

const course = {
  level: 'Private Class',
  titleTh: 'ภาษาอังกฤษสำหรับการสัมภาษณ์',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'คลาสติวสัมภาษณ์งานภาษาอังกฤษแบบตัวต่อตัว ออกแบบเฉพาะสำหรับผู้เรียนแต่ละคน เพื่อเตรียมความพร้อมก่อนวันสัมภาษณ์จริง',
    'ผู้เรียนจะได้จำลองสถานการณ์สัมภาษณ์ ฝึกตอบคำถามอย่างเป็นระบบ พร้อมปรับคำตอบให้ดูมืออาชีพ มั่นใจ และเป็นธรรมชาติ เน้นทั้งเนื้อหา (content) และการสื่อสาร (delivery) เพื่อให้ผู้เรียนพร้อมที่สุดใน',
  ],

  whoTitle: 'เหมาะสำหรับใคร',
  whoItsFor: [
    'ผู้ที่มีนัดสัมภาษณ์งานเร็ว ๆ นี้ และต้องการเตรียมตัวแบบเร่งด่วน',
    'ผู้ที่เคยสัมภาษณ์ภาษาอังกฤษแล้วรู้สึกไม่มั่นใจ',
    'ผู้ที่ฟังคำถามออก แต่ตอบไม่เป็นระบบ',
    'ผู้ที่ต้องการปรับ Self-Introduction ให้ดูเป็นมืออาชีพมากขึ้น',
    'นักศึกษา / คนทำงานที่สมัครงานบริษัทต่างประเทศ',
    'ผู้สมัคร Work & Travel หรือสัมภาษณ์ Visa',
  ],

  getTitle: 'สิ่งที่จะได้รับ',
  whatYouGet: [
    'ออกแบบ Self-Introduction ให้โดดเด่นและน่าประทับใจ',
    'Template โครงสร้างคำตอบสำหรับคำถามยอดฮิต',
    'จำลองสถานการณ์สัมภาษณ์เสมือนจริง',
    'ปรับคำตอบให้กระชับ ชัดเจน และดูเป็นมืออาชีพ',
    'คำศัพท์ที่เหมาะกับตำแหน่งงาน',
    'ฝึกออกเสียง พูดให้ชัด ฟังง่าย และเป็นธรรมชาติ',
    'ฟีดแบ็กแบบรายบุคคล ปรับตามจุดแข็ง–จุดอ่อนของผู้เรียน',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'เป็นคลาสตัวต่อตัว (Private Class)',
    'แนะนำลงเรียน 1–3 ชั่วโมง',
    'แนะนำให้ส่ง Job Description หรือรายละเอียดการสัมภาษณ์ล่วงหน้า เพื่อเตรียมเนื้อหาให้เหมาะสม',
    'หากมีวันสัมภาษณ์แน่นอน ควรจองล่วงหน้าเพื่อจัดตารางให้ทันเวลา',
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

export default function InterviewCoursePage() {
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
                  <span className={styles.pillLabel}>คำแนะนำ</span>
                  <span className={styles.pillValue}>
                    แนะนำลงเรียน 1–3 ชั่วโมง
                  </span>
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
                * แนะนำให้ส่ง Job Description หรือรายละเอียดการสัมภาษณ์ล่วงหน้า
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
