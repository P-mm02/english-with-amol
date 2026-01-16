// src/app/home/sections/CoursesSection/CoursesSection.tsx
import styles from './CoursesSection.module.css'
import { COURSES } from '../../homeData'

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
            เลือกเส้นทางที่ชัดเจน แต่ละคอร์สมีแผนการเรียน การฝึกพูด (Speaking
            drills) และ Feedback เพื่อพัฒนาได้ไวขึ้น
          </p>
        </header>

        <div className={styles.grid}>
          {COURSES.map((c) => (
            <article key={c.id} className={`card ${styles.card}`}>
              <div className={styles.top}>
                <span className={styles.level}>{c.level}</span>
              </div>

              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.subtitle}>{c.subtitle}</p>

              <div className={styles.meta}>
                <span className={styles.metaPill}>
                  <span className={styles.metaLabel}>ระยะเวลา:</span>{' '}
                  {c.duration}
                </span>
                <span className={styles.metaPill}>
                  <span className={styles.metaLabel}>รูปแบบ:</span> {c.format}
                </span>
              </div>

              <ul className={styles.list} aria-label={`${c.title} highlights`}>
                {c.highlights.map((h) => (
                  <li key={h} className={styles.li}>
                    <span className={styles.dot} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className={styles.bottom}>
                <p className={styles.price}>{c.price}</p>
                <a className="btn btnPrimary" href="#contact">
                  เริ่มเลย
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
