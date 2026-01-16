// src/app/home/sections/TeachingExample/TeachingExample.tsx
import Image from 'next/image'
import styles from './TeachingExample.module.css'

export default function TeachingExample() {
  return (
    <section
      id="TeachingExample"
      className={`section ${styles.teachingExample}`}
      aria-label="Teaching Example"
    >
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>ตัวอย่างการสอน</h2>
          <p className={styles.sub}>
            ตัวอย่างแบบง่ายและชัดเจนว่าเรียนกันยังไง (เหมาะสำหรับผู้ปกครอง, HR
            หรือเพื่อความเข้าใจของคุณเอง)
          </p>
        </header>

        <div className={styles.grid}>
          {/* ✅ Image + mini caption */}
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.visualMedia}>
              <Image
                src="/images/hero/hero-english-with-amol.jpg"
                alt=""
                priority={false}
                width={800}
                height={533}
                className={styles.visualImg}
              />
              <div className={styles.visualFx} />
            </div>

            <div className={`glass ${styles.visualCaption}`}>
              <p className={styles.capTitle}>ฝึกพูดจริง ได้ Feedback จริง</p>
              <p className={styles.capSub}>เป็นขั้นสั้น ๆ ทำซ้ำได้ทุกวัน</p>
            </div>
          </div>

          {/* ✅ Content panel */}
          <div className={`card ${styles.card}`}>
            <h3 className={styles.h3}>แนวทางการเรียน</h3>

            <div className={styles.steps}>
              {[
                {
                  n: 1,
                  t: 'เช็กระดับแบบเร็ว',
                  d: 'ดูจุดเริ่มต้นของคุณก่อน',
                },
                {
                  n: 2,
                  t: 'ตั้งเป้าหมาย',
                  d: 'Travel / work / interview / daily life',
                },
                { n: 3, t: 'Weekly plan', d: 'มีขั้นชัดเจนระหว่างแต่ละคลาส' },
                {
                  n: 4,
                  t: 'Speak + Feedback',
                  d: 'แก้ให้แบบจำได้และใช้ได้จริง',
                },
              ].map((s) => (
                <div key={s.n} className={styles.step}>
                  <div className={styles.n}>{s.n}</div>
                  <div>
                    <p className={styles.t}>{s.t}</p>
                    <p className={styles.d}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <h3 className={styles.h3}>สิ่งที่รวมในคอร์ส</h3>
            <ul className={styles.list}>
              {[
                'เป้าหมายผู้เรียน + โครงแผนการเรียน (Goal + Plan)',
                'ตารางเรียน + นโยบายเลื่อนคลาส (Reschedule policy)',
                'เงื่อนไขการชำระเงิน (Payment terms) แบบง่ายและชัดเจน',
                'ความเป็นส่วนตัว + ช่องทางการสื่อสาร (Privacy + Channel)',
              ].map((t) => (
                <li key={t} className={styles.li}>
                  <span className={styles.check} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>

            <div className={styles.btns}>
              <button className="btn" type="button">
                ดูตัวอย่าง
              </button>
              <button className="btn btnPrimary" type="button">
                ดาวน์โหลด
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
