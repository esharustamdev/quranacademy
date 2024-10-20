import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const Quotes = () => {
  return (
    <>
      <div className={styles.quotesCont}>
        <div className={styles.quoteHeading}>
          <h2>Islamic Quote From Quran</h2>
          <h1>ISLAMIC QUOTE</h1>
        </div>
        <div className={styles.quoteBody}>
          <div className={styles.quoteBodyImg}>
            <img src='images/Asset 1.png' alt='' />
          </div>
          <div className={styles.quoteBodyPara}>
            <h1>AYAT 58 (QURAN)</h1>
            <p>
              "... so where guidance comes to you from Me, then whoever followes
              my guidance, then there will neither be any fear on them nor they
              will grieve."
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Quotes
