import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footerCont}>
        <div className={styles.footerDiv1}>
          <h1>QURAN ARTICULATION INSTITUTE</h1>
          <p>
            Quran articulation is a leading online Quran academy providing
            comprehensive Quranic education to students worldwide.Our platform
            offers convenient and effective ways to learn the Quran online, with
            experienced instructors guiding students through personalized
            learning paths.
          </p>
        </div>
        <div className={styles.footerDiv1}>
          <h1>CONTACT US</h1>
          <div className={styles.FooterMain}>
            <div className={styles.footerDiv2Div1}>
              <img src='images/insta.png' alt='' />
              <p>quranart@gmail.com</p>
            </div>
            <div className={styles.footerDiv2Div1}>
              <img src='images/insta.png' alt='' />
              <p>+92-323-623454</p>
            </div>
            <div className={styles.footerDiv2Div1}>
              <img src='images/insta.png' alt='' />
              <p>+92-323-623454</p>
            </div>
            <div className={styles.footerDiv2Div1}>
              <img src='images/insta.png' alt='' />
              <p>Skype Chat</p>
            </div>
          </div>
          <div className={styles.footerDiv4}>
            <h2>Contact With Us:</h2>
            <div className={styles.footerend}>
              <img src='images/insta.png' alt='' />
              <img src='images/insta.png' alt='' />
              <img src='images/insta.png' alt='' />
            </div>
          </div>
        </div>
        <div className={styles.footerDiv1}>
          <h1>USEFUL LINKS</h1>
          <li>Courses</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>FAQs</li>
        </div>
      </div>
    </>
  )
}

export default Footer
