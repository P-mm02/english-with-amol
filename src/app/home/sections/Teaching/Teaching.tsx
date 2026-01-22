// src/app/home/sections/Teaching/Teaching.tsx
import Image from 'next/image'
import styles from './Teaching.module.css'

const classroomRules = {
  src: '/images/teaching/Classroom%20Rules.jpeg',
  alt: 'Classroom rules',
}

const plans = [
  {
    src: '/images/teaching/Basic%20English%20Foundation%20Course.jpeg',
    alt: 'Basic English Foundation Course teaching plan',
    title: 'Basic Foundation',
  },
  {
    src: '/images/teaching/Presentation%20Course.jpeg',
    alt: 'Presentation Course teaching plan',
    title: 'Presentation',
  },
  {
    src: '/images/teaching/Interviews%20Course.jpeg',
    alt: 'Interviews Course teaching plan',
    title: 'Interviews',
  },
]

export default function Teaching() {
  return (
    <section
      id="Teaching"
      className={`section ${styles.Teaching}`}
      aria-label="Teaching"
    >
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>การเรียน การสอน</h2>
          <p className={styles.sub}>
            ตัวอย่าง “กติกาในห้องเรียน” และ “แผนการสอน”
            เพื่อให้เห็นภาพการเรียนจริงแบบชัดเจน
          </p>
        </header>

        <div className={styles.grid}>
          {/* LEFT: Classroom rules */}
          <div className={styles.visual}>
            <div className={`glass ${styles.visualCaption}`}>
              <p className={styles.capTitle}>Classroom Rules</p>
              <p className={styles.capSub}>
                กติกาชัดเจน เรียนสบายใจ และโฟกัสการฝึกพูดในคลาส
              </p>
              <div className={styles.visualMedia}>
                <Image
                  src={classroomRules.src}
                  alt={classroomRules.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className={styles.visualImg}
                  priority={false}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Teaching plan gallery */}
          <div className={`card ${styles.card}`}>
            <div className={styles.cardHead}>
              <h3 className={styles.h3}>Teaching plan</h3>
              <p className={styles.cardSub}>
                ตัวอย่างแผนการสอนของแต่ละคอร์ส
              </p>
            </div>

            <div className={styles.planGrid}>
              {plans.map((p) => (
                <figure key={p.src} className={styles.planCard}>
                  <div className={styles.planMedia}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className={styles.planImg}
                      priority={false}
                    />
                  </div>
                  <figcaption className={styles.planCap}>{p.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
