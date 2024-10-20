import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'
const Section = () => {
  return (
    <>
      <div className={styles.sectionCont}>
        <div className={styles.SectionLeft}>
          <img src='images/Logo.png' alt='' />
        </div>
        <div className={styles.SectionRight}>
          <h1>Few Words About</h1>
          <h2>Quran Articulation Institute</h2>
          <p>
            Quran Learn Academy is an independent entity managed by a <br />
            small group of dedicated professionals. We welcome everyone to{' '}
            <br /> learn the teaching of tha holy Quran and the commandments of{' '}
            <br />
            Islam irrespective of their race , color and cast. We aim to make{' '}
            <br /> every Muslim understand and follow the basic principle of our{' '}
            <br /> religion so as to ensure we can become a better ummah as well{' '}
            <br /> as make this world a better place for everyone to live in.
          </p>
          <div className={styles.sectionList}>
            <div className={styles.sectionList1}>
              <li>Easy To Understand the process</li>
              <li>Equal Attention to every student</li>
            </div>
            <div className={styles.sectionList1}>
              <li>Timing that suits everyone</li>
              <li>One to one sessions</li>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section
