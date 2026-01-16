import styles from './FaqSection.module.css'
import { FAQ } from '../../homeData'

export default function FaqSection() {
  return (
    <section id="faq" className={`section ${styles.faq}`} aria-label="FAQ">
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>คำถามที่พบบ่อย (FAQ)</h2>
          <p className={styles.sub}>คำตอบสั้น ๆ สำหรับคำถามยอดฮิต</p>
        </header>

        <div className={styles.grid}>
          {FAQ.map((f) => (
            <details key={f.q} className={`card ${styles.item}`}>
              <summary className={styles.q}>
                <span>{f.q}</span>
                <span className={styles.chev} aria-hidden="true" />
              </summary>
              <p className={styles.a}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
