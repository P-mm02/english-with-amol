// src/app/home/sections/ContactSection/ContactSection.tsx
import styles from './ContactSection.module.css'
import ContactsBox from '@/components/ContactsBox/ContactsBox'
import CopyButton from '@/components/ui/CopyButton/CopyButton'

const CONTACT = {
  name: 'Amol',
  brand: 'English With Amol',
  lineId: '@englishwithamol',
  phone: '09X-XXX-XXXX',
  email: 'hello@englishwithamol.com',
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`section ${styles.contact}`}
      aria-label="Contact"
    >
      <div className="container">
        <div className={`glass ${styles.panel}`}>
          <header className={styles.head}>
            <h2 className={styles.h2}>ติดต่อ</h2>
            <p className={styles.sub}>
              แจ้งเป้าหมายการเรียน ทักษะปัจจุบัน
              หรือติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่
            </p>
          </header>

          {/* ✅ Contact text box + ContactsBox */}
          <div className={styles.ContactBox}>
            <section
              className={`card ${styles.info}`}
              aria-label="Contact details"
            >
              <p className={styles.label}>ข้อมูลติดต่อ</p>

              <div className={styles.rows}>
                <div className={styles.row}>
                  <div className={styles.k}>ชื่อ</div>
                  <div className={styles.vInline}>
                    <span className={styles.code}>{CONTACT.name}</span>
                    <CopyButton
                      className={styles.copyBtn}
                      value={CONTACT.name}
                      copiedText="คัดลอกแล้ว!"
                      idleText="คัดลอก"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.k}>LINE ID</div>
                  <div className={styles.vInline}>
                    <span className={styles.code}>{CONTACT.lineId}</span>
                    <CopyButton
                      className={styles.copyBtn}
                      value={CONTACT.lineId}
                      copiedText="คัดลอกแล้ว!"
                      idleText="คัดลอก"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.k}>โทร</div>
                  <div className={styles.vInline}>
                    <span className={styles.code}>{CONTACT.phone}</span>
                    <CopyButton
                      className={styles.copyBtn}
                      value={CONTACT.phone}
                      copiedText="คัดลอกแล้ว!"
                      idleText="คัดลอก"
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.k}>อีเมล</div>
                  <div className={styles.vInline}>
                    <span className={styles.code}>{CONTACT.email}</span>
                    <CopyButton
                      className={styles.copyBtn}
                      value={CONTACT.email}
                      copiedText="คัดลอกแล้ว!"
                      idleText="คัดลอก"
                    />
                  </div>
                </div>
              </div>

            </section>

            <div className={styles.box}>
              <ContactsBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
