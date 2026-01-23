// src/app/home/sections/Reviews/Reviews.tsx
import Slider from '@/components/Slider/Slider'
import type { Slide } from '@/components/Slider/function'
import styles from './Reviews.module.css'

const reviews = [
  { src: '/images/reviews/review-1.jpeg', alt: 'Student review 1' },
  { src: '/images/reviews/review-2.jpeg', alt: 'Student review 2' },
  { src: '/images/reviews/review-3.jpeg', alt: 'Student review 3' },
]

const SLIDES: Slide[] = reviews.map((r, idx) => ({
  src: r.src,
  alt: r.alt,
  caption: r.alt,
  priority: idx === 0,
}))

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

        <div className={styles.sliderWrapper}>
          <Slider
            slides={SLIDES}
            ariaLabel="Student reviews gallery"
            intervalMs={4500}
          />
        </div>
      </div>
    </section>
  )
}
