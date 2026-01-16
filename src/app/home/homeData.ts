// src/app/home/homeData.ts

export type Course = {
  id: string
  level: 'Starter' | 'Beginner' | 'Intermediate' | 'Advanced'
  title: string
  subtitle: string
  duration: string
  format: string
  price: string
  highlights: string[]
}

export const COURSES: Course[] = [
  {
    id: 'starter',
    level: 'Starter',
    title: 'เริ่มจากศูนย์ สู่ประโยคง่าย ๆ',
    subtitle: 'เริ่มพูดได้ด้วยประโยคใช้จริงในชีวิตประจำวัน',
    duration: '4 สัปดาห์',
    format: '1:1 / Online',
    price: 'เริ่มต้น ฿xxx / ครั้ง',
    highlights: [
      'พื้นฐานการออกเสียง (Pronunciation)',
      'ฝึกพูดทุกวันแบบสั้น ๆ (Daily drills)',
      'เพิ่มความมั่นใจในการพูด',
    ],
  },
  {
    id: 'beginner',
    level: 'Beginner',
    title: 'คุยในชีวิตประจำวัน',
    subtitle: 'Small talk → คุยลื่นขึ้นแบบเป็นธรรมชาติ',
    duration: '6 สัปดาห์',
    format: '1:1 / Online',
    price: 'เริ่มต้น ฿xxx / ครั้ง',
    highlights: [
      'แพตเทิร์นประโยคที่ใช้บ่อย',
      'ฝึกฟังให้จับใจความได้ไวขึ้น',
      'Roleplay สถานการณ์จริง',
    ],
  },
  {
    id: 'intermediate',
    level: 'Intermediate',
    title: 'Fluency Builder',
    subtitle: 'พูดยาวขึ้น ชัดขึ้น และเร็วขึ้นอย่างมั่นใจ',
    duration: '6 สัปดาห์',
    format: '1:1 / Online',
    price: 'เริ่มต้น ฿xxx / ครั้ง',
    highlights: [
      'เล่าเรื่องให้ลื่น (Storytelling)',
      'Speed & clarity (พูดไวขึ้นแต่ยังชัด)',
      'เพิ่มคลังคำศัพท์ (Vocabulary)',
    ],
  },
  {
    id: 'advanced',
    level: 'Advanced',
    title: 'สัมภาษณ์งาน & ภาษาอังกฤษที่ทำงาน',
    subtitle: 'ตอบได้มั่นใจ ดูโปร และเป็นมืออาชีพ',
    duration: '4–8 สัปดาห์',
    format: '1:1 / Online',
    price: 'เริ่มต้น ฿xxx / ครั้ง',
    highlights: [
      'เทคนิคตอบแบบ STAR',
      'Business vocab ที่ใช้จริง',
      'Mock interview ซ้อมเหมือนจริง',
    ],
  },
]

export const FAQ = [
  {
    q: 'เรียนยังไงบ้าง?',
    a: 'แต่ละคลาสจะมีฝึกพูด (Speaking drills) + แก้ให้แบบเป็นกันเอง และมีการบ้านสั้น ๆ ที่ทำได้จริงในชีวิตประจำวัน',
  },
  {
    q: 'ต้องเก่งอังกฤษก่อนมั้ย?',
    a: 'ไม่ต้องเลย เราเริ่มจากระดับปัจจุบันของคุณ แล้วค่อย ๆ พัฒนาแบบ step by step',
  },
  {
    q: 'ถ้างานยุ่งมากล่ะ?',
    a: 'ปรับเป็นแผนเบา ๆ ได้ (วันละ 10–15 นาที) ทำสม่ำเสมอดีกว่าหนักแต่หลุดบ่อย',
  },
  {
    q: 'มีสัญญาไหม?',
    a: 'มีแบบ Optional ถ้าอยากให้ชัดเจนเป็นทางการ สามารถใช้ template แบบง่ายได้',
  },
]
