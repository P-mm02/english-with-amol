// src/app/home/reviews/Reviews.tsx
import Image from 'next/image'
import styles from './Reviews.module.css'

const reviews = [
  { src: '/images/reviews/review-1.jpeg', alt: 'Student review 1' },
  { src: '/images/reviews/review-2.jpeg', alt: 'Student review 2' },
  { src: '/images/reviews/review-3.jpeg', alt: 'Student review 3' },
]

export default function Reviews() {
  return (
    <section
      id="reviews"
      className={`section ${styles.reviews}`}
      aria-label="Reviews"
    >
      <div className="container">
        <header className={styles.head}>
          <h2 className={styles.h2}>รีวิวจากผู้เรียน</h2>
          <p className={styles.sub}>ภาพรีวิวจริงจากผู้เรียน</p>
        </header>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <figure key={r.src} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={r.src}
                  alt={r.alt}
                  width={480}
                  height={480}
                  className={styles.img}
                  priority={false}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
