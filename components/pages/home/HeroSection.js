import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'
const HeroSection = () => {
  return (
    <div className={styles.HeroSection}>
      <img src='images/Islamic Banner (1).png' alt='' />
      <div className={styles.HeroSectionMain}>
        <div className={styles.HeroSectionBody}>
          <h1>
            Experience Quran Learning <br /> Like Never Before
          </h1>
          <div className={styles.HeroSectionBodyBtn}>
            <button>Start Your Free Trial</button>
            <button>Explore Our Course</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
