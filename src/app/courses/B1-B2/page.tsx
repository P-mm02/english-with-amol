// src/app/courses/B1-B2/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'B1–B2 Study Plan — English With Amol',
  description:
    'คอร์สระดับ B1–B2 ออกแบบเพื่อพัฒนาทักษะการสื่อสารเชิงลึก ให้ผู้เรียนสามารถแสดงความคิดเห็น วิเคราะห์ประเด็นสังคม และอภิปรายหัวข้อเชิงวิชาการได้อย่างมั่นใจ',
  openGraph: {
    title: 'B1–B2 Study Plan — English With Amol',
    description:
      'คอร์สระดับ B1–B2 ออกแบบเพื่อพัฒนาทักษะการสื่อสารเชิงลึก ให้ผู้เรียนสามารถแสดงความคิดเห็น วิเคราะห์ประเด็นสังคม และอภิปรายหัวข้อเชิงวิชาการได้อย่างมั่นใจ',
    type: 'website',
    images: [
      { url: '/images/courses/B1/ตัวอย่างการเรียน%20b1%20เรื่องAI.png' },
    ],
  },
}

function s(src: string, alt: string, priority = false): Slide {
  const safeSrc = src.replace(/ /g, '%20')
  return { src: safeSrc, alt, caption: 'B1–B2 Study Plan', priority }
}

const slides: Slide[] = [
  s(
    '/images/courses/B1/ตัวอย่างการเรียน b1 เรื่องAI.png',
    'ตัวอย่างการเรียน b1 เรื่องAI',
    true,
  ),
  s(
    '/images/courses/B1/ตัวอย่างการเรียน b1 เรื่องAI(1).png',
    'ตัวอย่างการเรียน b1 เรื่องAI(1)',
  ),
  s(
    '/images/courses/B1/ตัวอย่างการเรียน b1 เรื่องAI ตอบคำถามโดยใช้คำศัพท์ที่ให้.png',
    'ตัวอย่างการเรียน b1 เรื่องAI ตอบคำถามโดยใช้คำศัพท์ที่ให้',
  ),
]

const course = {
  level: 'B1–B2',
  titleTh: 'B1–B2 Study Plan (Intermediate to Upper-Intermediate)',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'คอร์สระดับ B1–B2 ออกแบบเพื่อพัฒนาทักษะการสื่อสารเชิงลึก ให้ผู้เรียนสามารถแสดงความคิดเห็น วิเคราะห์ประเด็นสังคม และอภิปรายหัวข้อเชิงวิชาการได้อย่างมั่นใจ',
    'ผู้เรียนจะได้พัฒนา Grammar ระดับกลาง–สูง, Advanced Vocabulary, Critical Thinking และทักษะ Discussion / Debate อย่างเป็นระบบ เพื่อเตรียมความพร้อมสู่ระดับ B2 เต็มรูปแบบ รวมถึงการใช้ภาษาอังกฤษในบริบทการเรียนต่อและการทำงานระดับสากล',
  ],

  whoTitle: 'เหมาะสำหรับใคร',
  whoItsFor: [
    'ผู้ที่สื่อสารได้ในระดับทั่วไป แต่ต้องการยกระดับภาษาให้ลึกและเป็นมืออาชีพมากขึ้น',
    'ผู้ที่ต้องการพัฒนาสู่ระดับ B2 หรือ Upper-Intermediate',
    'นักเรียน / นักศึกษาที่ต้องใช้ภาษาอังกฤษเชิงวิชาการ',
    'ผู้ที่เตรียมเรียนต่อ หรือทำงานในองค์กรต่างประเทศ',
    'คนทำงานที่ต้องใช้ภาษาอังกฤษในการวิเคราะห์ อภิปราย หรือพรีเซนต์งาน',
  ],

  getTitle: 'สิ่งที่จะได้รับ',
  whatYouGet: [
    'สไลด์การสอนครบทุกบทเรียน',
    'Discussion Framework และโครงสร้างประโยคขั้นกลาง–สูง',
    'Debate & Speaking Practice ทุกคลาส',
    'เทคนิคการให้เหตุผล การยกตัวอย่าง และการอธิบายอย่างเป็นระบบ',
    'คำศัพท์เชิงวิชาการและคำศัพท์ที่ใช้ในบริบทสากล',
  ],

  outlineTitle: 'โครงสร้างคอร์สเรียน (Course Outline)',
  outline: [
    {
      hour: 'ชั่วโมงที่ 1',
      title: 'Present Perfect',
      bullets: [
        'เรียนรู้โครงสร้าง Present Perfect และการพูดเกี่ยวกับประสบการณ์ ความสำเร็จ และเป้าหมายในชีวิตอย่างเป็นระบบ',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 2',
      title: 'What Can AI Do?',
      bullets: [
        'ฝึกใช้ Advanced Vocabulary วิเคราะห์บทบาทของ AI พร้อมแยกความคิดเห็น (opinion) และข้อเท็จจริง (facts)',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 3',
      title: 'Generation Z',
      bullets: [
        'อภิปรายลักษณะเฉพาะของ Gen Z พร้อมพัฒนาทักษะการแสดงความคิดเห็นและการอธิบายเชิงวิเคราะห์',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 4',
      title: 'World Trends & Festivals',
      bullets: [
        'เรียนรู้คำศัพท์เกี่ยวกับเทรนด์โลก และเทศกาลตะวันออก–ตะวันตก พร้อมฝึกเปรียบเทียบวัฒนธรรม',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 5',
      title: 'Social Media Influence (Debate Session)',
      bullets: [
        'อภิปรายอิทธิพลของโซเชียลมีเดีย ฝึกการตั้งเหตุผล การโต้แย้ง และการสนับสนุนความคิดเห็น',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 6',
      title: 'If-Clause (Conditionals)',
      bullets: [
        'เรียนรู้โครงสร้าง Conditional Sentences และการใช้ภาษาเชิงสมมติ (Hypothetical Situations)',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 7',
      title: 'Urbanization & Smart City',
      bullets: [
        'วิเคราะห์ประเด็นการพัฒนาเมืองสมัยใหม่ พร้อมฝึกใช้คำศัพท์เชิงสังคมและเทคโนโลยี',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 8',
      title: 'Natural Hazards',
      bullets: [
        'เรียนรู้คำศัพท์เกี่ยวกับภัยธรรมชาติ และฝึกพูดเกี่ยวกับการเตรียมตัวและการป้องกัน',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 9',
      title: 'Critical Discussion Practice',
      bullets: [
        'ฝึกอภิปรายหัวข้อเชิงสังคมโดยใช้เหตุผลและโครงสร้างภาษาที่ถูกต้อง',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 10',
      title: 'Recap',
      bullets: [
        'ทบทวนโครงสร้างและคำศัพท์ทั้งหมด พร้อมฝึก Discussion แบบต่อเนื่อง',
      ],
    },
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

export default function B1B2CoursePage() {
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
                  <span className={styles.pillLabel}>เลเวล</span>
                  <span className={styles.pillValueStrong}>{course.level}</span>
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
                * แนะนำให้ผู้เรียนมีพื้นฐานระดับกลางขึ้นไปก่อนเริ่มเรียน
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
