import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const Works = () => {
  return (
    <>
      <div className={styles.workConta}>
        <div className={styles.workDiv1}>
          <div className={styles.workDiv1Head}>
            <button>How it Works</button>
            <h2>Get Started In 3 Simple Steps</h2>
          </div>
        </div>
        <div className={styles.workDiv2}>
          <div className={styles.workDiv2Line}></div>
          <div className={styles.workDiv2Main}>
            <div className={styles.workDiv2Main1}>
              <h2>Book Your Free Trial</h2>
              <p>Book your free trial</p>
            </div>
            <div className={styles.workDiv2Main1}>
              <h2>Meet Your Tutor</h2>
              <p>Have a chat with your tutor</p>
            </div>
            <div className={styles.workDiv2Main1}>
              <h2>Start Your Learning Journey</h2>
              <p>Enjoy learning</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Works
