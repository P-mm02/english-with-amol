// src/app/home/sections/CoursesSection/A1/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'คอร์สปรับพื้นฐาน (A1) — English With Amol',
  description:
    'แผนการเรียนคอร์สปรับพื้นฐานภาษาอังกฤษ (Basic English Foundation Course A1) คอร์สกลุ่มเล็ก สำหรับนักเรียน–วัยทำงาน ระยะเวลาเรียน 10 ชั่วโมง ราคา 1,500 บาท',
  openGraph: {
    title: 'คอร์สปรับพื้นฐาน (A1) — English With Amol',
    description:
      'แผนการเรียนคอร์สปรับพื้นฐานภาษาอังกฤษ (Basic English Foundation Course A1) คอร์สกลุ่มเล็ก สำหรับนักเรียน–วัยทำงาน ระยะเวลาเรียน 10 ชั่วโมง ราคา 1,500 บาท',
    type: 'website',
    images: [
      {
        url: '/images/courses/A1/ตัวอย่างการเรียน%20a1%20เรื่อง%20กริยาช่วย.png',
      },
    ],
  },
}

function slide(src: string, alt: string, priority = false): Slide {
  return { src, alt, caption: 'คอร์สปรับพื้นฐาน (A1)', priority }
}

const slides: Slide[] = [
  slide(
    '/images/courses/A1/ตัวอย่างการเรียน%20a1%20เรื่อง%20กริยาช่วย(1).png',
    'ตัวอย่างการเรียน A1 เรื่อง กริยาช่วย (1)',
  ),
  slide(
    '/images/courses/A1/ตัวอย่างการเรียน%20a1%20เรื่อง%20กริยาช่วย(2).png',
    'ตัวอย่างการเรียน A1 เรื่อง กริยาช่วย (2)',
  ),
]

// ===== Content (exact client sentences) =====
const course = {
  titleTh: 'คอร์สปรับพื้นฐาน',
  titleEn: '(Basic English Foundation Course A1)',
  lead1: 'แผนการเรียนคอร์สปรับพื้นฐานภาษาอังกฤษ',
  lead2: 'คอร์สกลุ่มเล็ก สำหรับนักเรียน–วัยทำงาน',
  duration: 'ระยะเวลาเรียน 10 ชั่วโมง',
  price: 'ราคา 1,500 บาท',

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'คำบรรยาย',
  descriptionBullets: [
    'เน้นสร้างความเข้าใจโครงสร้างภาษา และสามารถนำไปใช้สนทนาได้จริงในชีวิตประจำวัน',
    'คอร์สปรับพื้นฐานภาษาอังกฤษ (กลุ่มเล็ก)',
    'คอร์สปูพื้นฐานภาษาอังกฤษแบบเข้มข้น เรียนในกลุ่มเล็ก เพื่อให้ผู้เรียนได้รับการดูแลอย่างใกล้ชิด -พร้อมฝึกใช้ภาษา “พูดได้จริง” ไม่ใช่แค่จำแกรมมาร์',
    'ปรับพื้นฐานตั้งแต่โครงสร้างประโยค คำศัพท์ และการออกเสียง',
    'เรียนแบบมีระบบ เข้าใจ logic ของภาษา ไม่ท่องจำ',
    'ฝึกพูดทุกครั้งในคลาส เพื่อสร้างความมั่นใจ',
    'บรรยากาศเป็นกันเอง แต่มีโครงสร้างชัดเจน',
  ],

  whoTitle: 'เหมาะสำหรับใคร',
  whoItsFor: [
    'ผู้เรียนที่ ไม่มีพื้นฐาน หรือพื้นฐานอ่อน',
    'ผู้ที่พื้นฐานยังไม่แน่น ระดับ A1',
    'คนที่ “เคยเรียนมาแล้ว แต่ยังพูดไม่ได้”',
    'คนที่อยากปูพื้นฐานใหม่ก่อนเรียนคอร์ส Speaking',
    'คนที่ขาดความมั่นใจในการใช้ภาษาอังกฤษ',
    'นักเรียน / นักศึกษา / คนทำงานที่อยากใช้ภาษาอังกฤษในชีวิตจริง',
  ],

  getTitle: 'สิ่งที่จะได้รับ',
  whatYouGet: [
    'สไลด์การสอนครบทุกบทเรียน',
    'วิดีโอบันทึกย้อนหลัง (สำหรับทบทวน)',
    'แบบฝึกหัด + Template โครงสร้างประโยคที่ใช้ได้จริง',
    'Practice Session ทุกคลาส (ได้พูดทุกคน)',
    'เทคนิคการสร้างประโยคให้พูดคล่อง',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'คอร์สเรียนแบบกลุ่มเล็ก จำกัดจำนวนผู้เรียนต่อรอบ (2-5 ท่าน)',
    'หากไม่แน่ใจระดับ สามารถสอบถามเพื่อประเมินก่อนเรียนได้',
    '** คอร์สนี้ถูกออกแบบมาเพื่อให้ผู้เรียนได้ปูพื้นฐานภาษาอังกฤษอย่างมีประสิทธิภาพ ในค่าใช้จ่ายที่คุ้มค่า เหมาะสำหรับผู้ที่ต้องการเริ่มต้นใหม่อย่างถูกทาง สร้างความคุ้นเคยกับภาษาอังกฤษ และเพิ่มความมั่นใจในการใช้งานจริง**',
  ],

  outlineTitle: 'โครงสร้างคอร์สเรียน (Course Outline)',
  outline: [
    {
      hour: 'ชั่วโมงที่ 1',
      title: 'Sentence Structure & Pronouns',
      bullets: [
        'โครงสร้างประโยคพื้นฐาน',
        'ประโยคเล่า และประโยคปฏิเสธ',
        'การใช้ Pronouns อย่างถูกต้อง',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 2–3',
      title: 'Adjectives (คำคุณศัพท์)',
      bullets: [
        'การขยายคำนาม',
        'การใช้คำคุณศัพท์ในประโยคจริง',
        'ฝึกแต่งประโยคจากสถานการณ์ใกล้ตัว',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 4–5',
      title: 'Basic Conversation',
      bullets: [
        'การสร้างประโยคสนทนาตามหัวข้อพื้นฐาน',
        'ฝึกพูดในสถานการณ์จริง เช่น การแนะนำตัว พูดคุยกับเพื่อน',
        'เน้นความมั่นใจในการพูด',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 6',
      title: 'Wh- Questions',
      bullets: [
        'การสร้างประโยคคำถาม',
        'ฝึกถาม–ตอบจากสถานการณ์จริง',
        'เริ่มฝึกฟังจาก Audio สั้น ๆ',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 7–8',
      title: 'Modal Verbs & Giving Advice',
      bullets: [
        'การใช้คำแสดงความสามารถ ความจำเป็น',
        'การให้คำแนะนำในชีวิตประจำวัน',
        'ฝึกพูดแบบเป็นธรรมชาติ',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 9',
      title: 'Shopping Lesson & Listening Task',
      bullets: [
        'คำศัพท์และประโยคที่ใช้ในการซื้อของ',
        'ฝึกฟังจาก Audio',
        'ฝึกสร้างบทสนทนาจากสถานการณ์จริง',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 10',
      title: 'Conjunctions & Daily Routines',
      bullets: [
        'คำเชื่อมประโยค',
        'การเล่าเรื่องกิจวัตรประจำวัน',
        'ฝึกพูดเป็นพารากราฟสั้น ๆ',
      ],
    },
  ],

  learningTitle: 'รูปแบบการเรียน',
  learningBullets: [
    'เรียนแบบ กลุ่มเล็ก (4–5 คน)',
    'เรียนออนไลน์ผ่าน Google Meet',
    'มีเอกสารประกอบการเรียนให้ทุกบทเรียน',
    'เน้นฝึกพูดจริง ใช้ได้จริง',
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

export default function A1CoursePage() {
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
              <span className={styles.level}>A1</span>
            </div>

            <h1 className={styles.h1}>{course.titleTh}</h1>
            <p className={styles.h2}>{course.titleEn}</p>
            <p className={styles.sub}>{course.lead2}</p>
            <p className={styles.subMeta}>{course.lead1}</p>

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
            <section className={`card ${styles.block}`} aria-label="Quick info">
              <h2 className={styles.blockTitle}>ข้อมูลคอร์ส</h2>

              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ระยะเวลา</span>
                  <span className={styles.infoValue}>{course.duration}</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>รูปแบบ</span>
                  <span className={styles.infoValue}>
                    เรียนออนไลน์ผ่าน Google Meet
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ขนาดคลาส</span>
                  <span className={styles.infoValue}>
                    เรียนแบบ กลุ่มเล็ก (4–5 คน)
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ราคาเริ่มต้น</span>
                  <span className={styles.infoValueStrong}>{course.price}</span>
                </div>
              </div>
            </section>

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
                <Bullets items={course.descriptionBullets} />
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

              <div className={styles.learnFormat} aria-label="Learning format">
                <h3 className={styles.subTitle}>{course.learningTitle}</h3>
                <Bullets items={course.learningBullets} />
              </div>
            </section>
          </div>

          {/* SIDE */}
          <aside className={styles.side} aria-label="Sidebar summary">
            <div className={`glass ${styles.sticky}`}>
              <h3 className={styles.sideTitle}>สรุปคอร์ส</h3>

              <div className={styles.pills}>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ราคา</span>
                  <span className={styles.pillValueStrong}>{course.price}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ระยะเวลา</span>
                  <span className={styles.pillValue}>{course.duration}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>รูปแบบ</span>
                  <span className={styles.pillValue}>
                    เรียนออนไลน์ผ่าน Google Meet
                  </span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ขนาดคลาส</span>
                  <span className={styles.pillValue}>
                    เรียนแบบ กลุ่มเล็ก (4–5 คน)
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
                * สอบถามรอบเรียน และแนะนำคอร์สให้เหมาะกับระดับของคุณได้
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
