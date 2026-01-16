// src/app/home/sections/HeroSection/HeroSection.tsx
import Image from 'next/image'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section id="home" className={`section ${styles.hero}`} aria-label="Hero">
      <div className={`container ${styles.grid}`}>
        <div>
          {/* ✅ Hero image */}
          <div className={styles.visual} aria-hidden="true">
            <Image
              src="/images/hero/hero-english-with-amol.jpg"
              alt=""              
              priority   
              width={800}
              height={533}           
              className={styles.visualImg}
            />
            <div className={styles.visualFx} />
          </div>

          <h1 className={styles.h1}>
            พูดอังกฤษให้มั่นใจ —{' '}
            <span className={styles.h1Accent}>step by step</span>.
          </h1>

          <p className={styles.lead}>
            โครงสร้างชัดเจน โค้ชเป็นกันเอง และเน้นการพูดแบบใช้ได้จริง
            คุณจะรู้ว่าควรฝึกอะไร และพัฒนาได้ไวขึ้น
          </p>

          <ul className={styles.list} aria-label="Key benefits">
            <li className={styles.li}>
              <span className={styles.check} aria-hidden="true" />
              แผนเรียนแบบ Personalized ตามเป้าหมายของคุณ (travel, work,
              interview, daily life)
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

          <div className={styles.proof} aria-label="Social proof">
            <div className={styles.proofCard}>
              <p className={styles.proofBig}>Structured</p>
              <p className={styles.proofSmall}>แผนรายสัปดาห์ชัดเจน</p>
            </div>
            <div className={styles.proofCard}>
              <p className={styles.proofBig}>Friendly</p>
              <p className={styles.proofSmall}>ผิดได้ ไม่กดดัน</p>
            </div>
          </div>
        </div>

        <div className={styles.right} aria-label="Tutor card">
          <div className={`card ${styles.card}`}>
            <div className={styles.top}>
              <div className={styles.avatar} aria-hidden="true" />
              <div>
                <p className={styles.name}>Amol</p>
                <p className={styles.role}>English Tutor • Coach</p>
              </div>
            </div>

            <div className={styles.miniGrid}>
              <div className={styles.mini}>
                <p className={styles.miniLabel}>Focus</p>
                <p className={styles.miniValue}>Speaking</p>
              </div>
              <div className={styles.mini}>
                <p className={styles.miniLabel}>Style</p>
                <p className={styles.miniValue}>Clear & kind</p>
              </div>
              <div className={styles.mini}>
                <p className={styles.miniLabel}>Plan</p>
                <p className={styles.miniValue}>Weekly steps</p>
              </div>
              <div className={styles.mini}>
                <p className={styles.miniLabel}>Practice</p>
                <p className={styles.miniValue}>10–15 min/day</p>
              </div>
            </div>

            <div className={styles.callout}>
              <p className={styles.callTitle}>Quick progress formula</p>
              <div className={styles.tags}>
                <span className={styles.tag}>Speak</span>
                <span className={styles.tag}>Feedback</span>
                <span className={styles.tag}>Repeat</span>
                <span className={styles.tag}>Confidence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
