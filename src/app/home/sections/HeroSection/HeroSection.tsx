// src/app/home/sections/HeroSection/HeroSection.tsx
import Image from 'next/image'
import styles from './HeroSection.module.css'
import profileData from './profile.json'

import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'

type Profile = {
  name: string
  roleTh: string
  roleEn?: string
  experience?: string
  avatar: { src: string; alt: string }

  services: string[]

  focusTitleTh?: string
  focus: { label: string; value: string }[]

  credentials?: { title: string; items: string[] }
}

const PROFILE = profileData as Profile

const HERO_SLIDES: Slide[] = [
  {
    src: '/images/hero/Hero-1.jpg',
    alt: 'English With Amol hero image',
    caption: 'English With Amol',
    priority: true,
  },
  {
    src: '/images/teaching/Basic English Foundation Course.jpeg',
    alt: 'Basic English Foundation Course',
    caption: 'Basic English Foundation Course',
    priority: true,
  },
  {
    src: '/images/teaching/Presentation Course.jpeg',
    alt: 'Presentation Course',
    caption: 'Presentation Course',
    priority: true,
  },
  {
    src: '/images/teaching/Interviews Course.jpeg',
    alt: 'Interviews Course',
    caption: 'Interviews Course',
    priority: true,
  },
  // Add more when you have them (make sure files exist)
  // { src: '/images/hero/Hero-2.jpg', alt: '...', caption: '...', priority: false },
  // { src: '/images/hero/Hero-3.jpg', alt: '...', caption: '...', priority: false },
]

export default function HeroSection() {
  return (
    <section id="home" className={`section ${styles.hero}`} aria-label="Hero">
      <div className={`container ${styles.grid}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.visual} aria-label="Hero images">
            <Slider
              slides={HERO_SLIDES}
              ariaLabel="Hero image slider"
              intervalMs={4500}
            />

          </div>

          <h1 className={styles.h1}>พูดอังกฤษให้มั่นใจ</h1>

          <p className={styles.lead}>
            โครงสร้างชัดเจน โค้ชเป็นกันเอง และเน้นการพูดแบบใช้ได้จริง
            คุณจะรู้ว่าควรฝึกอะไร และพัฒนาได้ไวขึ้น
          </p>

          <ul className={styles.list} aria-label="Key benefits">
            <li className={styles.li}>
              <span className={styles.check} aria-hidden="true" />
              แผนเรียนแบบ Personalized ตามเป้าหมาย (travel, work, interview,
              daily life)
            </li>
            <li className={styles.li}>
              <span className={styles.check} aria-hidden="true" />
              ฝึกพูดจริง + แก้ให้ทันที (ไม่ใช่ worksheet น่าเบื่อ)
            </li>
            <li className={styles.li}>
              <span className={styles.check} aria-hidden="true" />
              ฝึกสั้น ๆ ทุกวัน ทำได้ต่อเนื่องจริง
            </li>
          </ul>

          <div className={styles.cta}>
            <a className="btn btnPrimary" href="#courses">
              ดูคอร์ส
            </a>
            <a className="btn btnBlue" href="#contact">
              ติดต่อครูผู้สอน
            </a>
          </div>

          <div className={styles.proof} aria-label="Social proof">
            <div className={styles.proofCard}>
              <p className={styles.proofBig}>Structured</p>
              <p className={styles.proofSmall}>แผนรายสัปดาห์ชัดเจน</p>
            </div>
            <div className={styles.proofCard}>
              <p className={styles.proofBig}>Friendly</p>
              <p className={styles.proofSmall}>ผิดได้ ไม่กดดัน</p>
            </div>
            <div className={styles.proofCard}>
              <p className={styles.proofBig}>Practical</p>
              <p className={styles.proofSmall}>พูดได้จริง ใช้ได้จริง</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className={styles.right} aria-label="Teacher profile">
          <div className={`card ${styles.card}`}>
            <div className={styles.top}>
              <div className={styles.avatar}>
                <Image
                  src={PROFILE.avatar.src}
                  alt={PROFILE.avatar.alt}
                  width={128}
                  height={128}
                  className={styles.avatarImg}
                />
              </div>

              <div className={styles.topText}>
                <p className={styles.name}>{PROFILE.name}</p>
                <p className={styles.role}>{PROFILE.roleTh}</p>
                {PROFILE.experience ? (
                  <p className={styles.exp}>{PROFILE.experience}</p>
                ) : null}
              </div>
            </div>

            {PROFILE.roleEn ? (
              <p className={styles.roleEn}>{PROFILE.roleEn}</p>
            ) : null}

            {PROFILE.focusTitleTh ? (
              <p className={styles.sectionTitle}>{PROFILE.focusTitleTh}</p>
            ) : null}

            <div className={styles.miniGrid} aria-label="Teaching approach">
              {PROFILE.focus.map((f) => (
                <div key={f.label} className={styles.mini}>
                  <p className={styles.miniLabel}>{f.label}</p>
                  <p className={styles.miniValue}>{f.value}</p>
                </div>
              ))}
            </div>

            {PROFILE.credentials?.items?.length ? (
              <div className={styles.credentials} aria-label="Credentials">
                <p className={styles.sectionTitle}>
                  {PROFILE.credentials.title}
                </p>
                <ul className={styles.credList}>
                  {PROFILE.credentials.items.map((t) => (
                    <li key={t} className={styles.credLi}>
                      <span className={styles.dotRed} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className={styles.services} aria-label="Services">
              <p className={styles.sectionTitle}>บริการเพิ่มเติม</p>
              <ul className={styles.servicesList}>
                {PROFILE.services.map((s) => (
                  <li key={s} className={styles.servicesLi}>
                    <span className={styles.dotBlue} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.cardCta}>
              <a className="btn btnPrimary" href="#contact">
                ทักมาคุยเป้าหมาย
              </a>
              <a className="btn btnBlue" href="#courses">
                เลือกคอร์ส
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
