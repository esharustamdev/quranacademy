import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const Courses = () => {
  return (
    <>
      <div className={styles.coursesCont}>
        <div className={styles.coursesHead}>
          <h1>Our Courses</h1>
        </div>
        <div className={styles.coursesMain}>
          <div className={styles.CoursesMainDiv1}>
            <div className={styles.coursesMainImg}>
              <img src='images/Boy Reading.png' alt='' />
            </div>
            <div className={styles.coursesMainPara}>
              <h3>Learn Quran Reading Basics</h3>
              <p>lorem ipsum</p>
            </div>
            <div className={styles.coursesMainBtn}>
              <button>Book Free Trail</button>
              <button>View Course</button>
            </div>
          </div>
          <div className={styles.CoursesMainDiv1}>
            <div className={styles.coursesMainImg}>
              <img src='images/Boy Reading.png' alt='' />
            </div>
            <div className={styles.coursesMainPara}>
              <h3>Learn Quran Reading Basics</h3>
              <p>lorem ipsum</p>
            </div>
            <div className={styles.coursesMainBtn}>
              <button>Book Free Trail</button>
              <button>View Course</button>
            </div>
          </div>
          <div className={styles.CoursesMainDiv1}>
            <div className={styles.coursesMainImg}>
              <img src='images/Boy Reading.png' alt='' />
            </div>
            <div className={styles.coursesMainPara}>
              <h3>Learn Quran Reading Basics</h3>
              <p>lorem ipsum</p>
            </div>
            <div className={styles.coursesMainBtn}>
              <button>Book Free Trail</button>
              <button>View Course</button>
            </div>
          </div>
          <div className={styles.CoursesMainDiv1}>
            <div className={styles.coursesMainImg}>
              <img src='images/Boy Reading.png' alt='' />
            </div>
            <div className={styles.coursesMainPara}>
              <h3>Learn Quran Reading Basics</h3>
              <p>lorem ipsum</p>
            </div>
            <div className={styles.coursesMainBtn}>
              <button>Book Free Trail</button>
              <button>View Course</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses
