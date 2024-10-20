import React, { useState } from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const Navbar = () => {
  const [navFunc, setnavFunc] = useState(false)
  const mobNavFun = () => {
    setnavFunc(!navFunc)
  }

  return (
    <>
      <div className={styles.navCont}>
        <div
          className={`${styles.navMob} ${navFunc ? styles.navMobactive : ''}`}
        >
          <div className={styles.mobNavLogo}>
            <div className={styles.mobNavLogo1}>
              <img src='images/logo.png' alt='' />
            </div>
            <div className={styles.mobNavLogo2}>
              <img src='images/insta.png' alt='' onClick={mobNavFun} />
            </div>
          </div>
          <div className={styles.MobnavLibks}>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>Courses</a>
              </li>
              <li>
                <a href=''>Library</a>
              </li>
              <li>
                <a href=''>Fees</a>
              </li>
              <li>
                <a href=''>Teachers</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.navLogo}>
          <img src='images/logo.png' alt='' />
        </div>
        <div className={styles.navIcon}>
          <img src='images/insta.png' alt='' onClick={mobNavFun} />
        </div>
        <div className={styles.navLinks}>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Course</a>
            </li>
            <li>
              <a href=''>Library</a>
            </li>
            <li>
              <a href=''>Fees</a>
            </li>
            <li>
              <a href=''>Teachers</a>
            </li>
            <li>
              <a href=''>Free Trial</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
