// src/app/courses/A2/page.tsx
import Link from 'next/link'
import styles from './page.module.css'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

export const metadata = {
  title: 'Speaking Class สำหรับผู้มีพื้นฐาน (A2) — English With Amol',
  description:
    'คอร์สพูดภาษาอังกฤษ สำหรับผู้เริ่มต้น–มีพื้นฐานเล็กน้อย (A2) ระยะเวลาเรียน 10 ชั่วโมง ราคา 1,500 บาท กลุ่มเล็ก (4-5 คน)',
  openGraph: {
    title: 'Speaking Class สำหรับผู้มีพื้นฐาน (A2) — English With Amol',
    description:
      'คอร์สพูดภาษาอังกฤษ สำหรับผู้เริ่มต้น–มีพื้นฐานเล็กน้อย (A2) ระยะเวลาเรียน 10 ชั่วโมง ราคา 1,500 บาท กลุ่มเล็ก (4-5 คน)',
    type: 'website',
    images: [
      {
        url: '/images/courses/A2/ตัวอย่างการเรียน%20a2%20เรื่อง%20movie.png',
      },
    ],
  },
}

function s(src: string, alt: string, priority = false): Slide {
  // encode spaces so Thai + spaces paths are safe
  const safeSrc = src.replace(/ /g, '%20')
  return { src: safeSrc, alt, caption: 'Speaking Class (A2)', priority }
}

const slides: Slide[] = [
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง movie.png',
    'ตัวอย่างการเรียน a2 เรื่อง movie',
    true,
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง movie คำศัพท์.png',
    'ตัวอย่างการเรียน a2 เรื่อง movie คำศัพท์',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง movie ตอบคำถาม.png',
    'ตัวอย่างการเรียน a2 เรื่อง movie ตอบคำถาม',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง movie ตอบคำถามจากวิดีโอ.png',
    'ตัวอย่างการเรียน a2 เรื่อง movie ตอบคำถามจากวิดีโอ',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง อนาคต.png',
    'ตัวอย่างการเรียน a2 เรื่อง อนาคต',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง อนาคต _ เรียนคำศัพท์.png',
    'ตัวอย่างการเรียน a2 เรื่อง อนาคต _ เรียนคำศัพท์',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง อนาคต _ วางแผนอนาคต ใช้คำศัพท์ และ โครงสร้างอย่างถูกต้อง.png',
    'ตัวอย่างการเรียน a2 เรื่อง อนาคต _ วางแผนอนาคต ใช้คำศัพท์ และ โครงสร้างอย่างถูกต้อง',
  ),
  s(
    '/images/courses/A2/ตัวอย่างการเรียน a2 เรื่อง อนาคต เติมคำในช่องว่าง.png',
    'ตัวอย่างการเรียน a2 เรื่อง อนาคต เติมคำในช่องว่าง',
  ),
]

// ===== Content (use exact sentences from client) =====
const course = {
  level: 'A2',
  titleTh: 'Speaking Class สำหรับผู้มีพื้นฐาน (A2)',
  subtitleTh: 'คอร์สพูดภาษาอังกฤษ สำหรับผู้เริ่มต้น–มีพื้นฐานเล็กน้อย (A2)',

  duration: 'ระยะเวลาเรียน 10 ชั่วโมง',
  priceMain: 'ราคา 1,500 บาท กลุ่มเล็ก (4-5 คน)',
  priceOptions: [
    { label: 'เรียนเดี่ยว', value: '2800' },
    { label: 'จับกลุ่มเอง/2000 บาทต่อคน (2คนขึ้นไป)', value: '' },
  ],

  lead: [
    'คอร์สนี้เหมาะสำหรับผู้ที่สามารถเข้าใจประโยคง่าย ๆ ได้แล้ว',
    'และต้องการ ฝึกพูดให้กล้า มั่นใจ และสื่อสารได้เป็นธรรมชาติขึ้น',
  ],

  descriptionTitleEn: 'DESCRIPTION',
  descriptionTitleTh: 'รายละเอียด',
  description: [
    'คอร์สระดับ A2 ออกแบบเพื่อพัฒนาทักษะการสื่อสารในชีวิตประจำวันให้มั่นใจและต่อเนื่องมากขึ้น ผู้เรียนจะได้ต่อยอดจากพื้นฐานเดิม เรียนรู้โครงสร้างไวยากรณ์ที่สำคัญ และฝึกพูดในสถานการณ์ที่ใช้จริง',
    'เนื้อหาครอบคลุมทั้ง Past, Future, Present Perfect, การให้คำแนะนำ และการเปรียบเทียบ พร้อมฝึกสร้างประโยคอย่างเป็นระบบ เพื่อเตรียมความพร้อมสู่ระดับ B1',
  ],

  whoTitle: 'เหมาะสำหรับใคร',
  whoItsFor: [
    'ผู้ที่มีพื้นฐานระดับต้นและต้องการพัฒนาให้คล่องขึ้น',
    'ผู้ที่สื่อสารประโยคง่าย ๆ ได้ แต่ยังไม่ต่อเนื่อง',
    'ผู้ที่ต้องการเข้าใจ Tense ให้ชัดเจนมากขึ้น',
    'นักเรียน / นักศึกษา / คนทำงานที่อยากใช้ภาษาอังกฤษในชีวิตจริง',
    'ผู้ที่เตรียมขยับสู่ระดับ B1',
  ],

  getTitle: 'สิ่งที่จะได้รับ',
  whatYouGet: [
    'สไลด์การสอนครบทุกบทเรียน',
    'วิดีโอบันทึกย้อนหลังสำหรับทบทวน',
    'แบบฝึกหัดและโครงสร้างประโยคที่ใช้ได้จริง',
    'Speaking Practice ทุกคลาส (ได้ฝึกพูดทุกคน)',
    'เทคนิคสร้างประโยคให้พูดได้ลื่นขึ้นโดยไม่ต้องแปลคำต่อคำ',
  ],

  noteTitle: 'PLEASE NOTE',
  pleaseNote: [
    'คอร์สนี้เหมาะสำหรับผู้เรียนระดับ A2',
    'คลาสกลุ่มเล็ก เพื่อให้ได้รับการดูแลอย่างทั่วถึง',
    'คอร์สเดี่ยวสามารถปรับเนื้อหาให้เหมาะกับเป้าหมายของผู้เรียนได้',
    'หากไม่แน่ใจระดับ สามารถสอบถามเพื่อประเมินก่อนเริ่มเรียนได้',
  ],

  outlineTitle: 'โครงสร้างคอร์สเรียน (A2 Course Outline)',
  outline: [
    {
      hour: 'ชั่วโมงที่ 1',
      title: 'Personality',
      bullets: [
        'เรียนรู้คำศัพท์เกี่ยวกับบุคลิกภาพ และฝึกพูดแนะนำตัวให้คล่องขึ้น เพื่อสร้างความคุ้นเคยกับการใช้ภาษาอังกฤษ',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 2',
      title: 'Future Tense',
      bullets: [
        'เรียนรู้โครงสร้าง Future (will / going to) และคำศัพท์เกี่ยวกับแผนในอนาคต ฝึกพูดเกี่ยวกับเป้าหมายและแผนชีวิต',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 3',
      title: 'Movie Topic',
      bullets: [
        'เรียนรู้คำศัพท์ผ่านฉากสั้น ๆ จากภาพยนตร์ ฝึกฟังและสร้างประโยคจากสถานการณ์จริง',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 4',
      title: 'Past Tense (Structure)',
      bullets: ['เรียนรู้โครงสร้าง Past Simple อย่างเป็นระบบ'],
    },
    {
      hour: 'ชั่วโมงที่ 5',
      title: 'Past Tense (Speaking Practice)',
      bullets: ['ฝึกพูดเล่าเหตุการณ์ในอดีต เพื่อเพิ่มความมั่นใจในการสื่อสาร'],
    },
    {
      hour: 'ชั่วโมงที่ 6',
      title: 'Life Recommendation',
      bullets: [
        'เรียนรู้การใช้ Modal Verbs (should / shouldn’t / must) เพื่อให้คำแนะนำและแสดงความคิดเห็น',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 7',
      title: 'Another / Other',
      bullets: [
        'เรียนรู้การใช้ another / other / others พร้อมคำศัพท์ในหัวข้อ “Friendship”',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 8',
      title: 'Present Perfect',
      bullets: [
        'เรียนรู้โครงสร้าง Present Perfect และการพูดเกี่ยวกับประสบการณ์ ความสำเร็จ และเป้าหมาย',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 9',
      title: 'Comparison',
      bullets: [
        'เรียนรู้ Comparative และ Superlative เพื่อเปรียบเทียบสิ่งต่าง ๆ อย่างถูกต้อง',
      ],
    },
    {
      hour: 'ชั่วโมงที่ 10',
      title: 'Recap',
      bullets: ['ทบทวนโครงสร้างและคำศัพท์ทั้งหมด พร้อมฝึกบทสนทนา'],
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

export default function A2CoursePage() {
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
            <p className={styles.h2}>{course.subtitleTh}</p>

            <div className={styles.heroMeta}>
              <p className={styles.sub}>{course.duration}</p>
              <p className={styles.subStrong}>{course.priceMain}</p>
            </div>

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
                  <span className={styles.infoValue}>เรียนตามเลเวล</span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ราคา</span>
                  <span className={styles.infoValueStrong}>
                    {course.priceMain}
                  </span>
                </div>

                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ตัวเลือกเพิ่มเติม</span>
                  <span className={styles.infoValue}>
                    เรียนเดี่ยว 2800 จับกลุ่มเอง/2000 บาทต่อคน (2คนขึ้นไป)
                  </span>
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
                <Bullets items={course.lead} />
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
                  <span className={styles.pillLabel}>ราคา</span>
                  <span className={styles.pillValueStrong}>
                    {course.priceMain}
                  </span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>ระยะเวลา</span>
                  <span className={styles.pillValue}>{course.duration}</span>
                </div>
                <div className={styles.pill}>
                  <span className={styles.pillLabel}>เลเวล</span>
                  <span className={styles.pillValue}>{course.level}</span>
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
                * หากไม่แน่ใจระดับ สามารถสอบถามเพื่อประเมินก่อนเริ่มเรียนได้
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
