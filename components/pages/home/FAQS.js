import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const FAQS = () => {
  return (
    <>
      <div className={styles.FAQSCont}>
        <div className={styles.faqsHead}>
          <h2>Quran Articulation Institute</h2>
          <h1>FAQS</h1>
        </div>
        <div className={styles.faqsMain}>
          <div className={styles.FAQSDiv}>
            <p>What age groups does your institue cater to?</p>
          </div>
          <div className={styles.FAQSDiv}>
            <p>What age groups does your institue cater to?</p>
          </div>
          <div className={styles.FAQSDiv}>
            <p>What age groups does your institue cater to?</p>
          </div>
          <div className={styles.FAQSDiv}>
            <p>What age groups does your institue cater to?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQS
