import React from 'react'
import styles from '@/styles/home/HeroSection.module.css'

const PilarsOfIslam = () => {
  return (
    <>
      <div className={styles.PilarsOfIslamCont}>
        <div className={styles.pillarsHead}>
          <h2> The Five Pillars Of Islam</h2>
          <h1>Pillars of islam </h1>
        </div>
        <div className={styles.pillarsMain}>
          <div className={styles.pillarsMaindiv1}>
            <div className={styles.pillarMainImg}>
              <img src='images/Asset 3.png' alt='' />
              <div className={styles.PilarsMainImg2}>
                <img src='images/pngwing.com.png' alt='' />
                <h3>
                  SHAHADAH <br />
                  (FAITH)
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.pillarsMaindiv1}>
            <div className={styles.pillarMainImg}>
              <img src='images/Asset 3.png' alt='' />
              <div className={styles.PilarsMainImg2}>
                <img src='images/salah.png' alt='' />
                <h3>
                  SALAH <br />
                  (PRAYER)
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.pillarsMaindiv1}>
            <div className={styles.pillarMainImg}>
              <img src='images/Asset 3.png' alt='' />
              <div className={styles.PilarsMainImg2}>
                <img src='images/fasting.png' alt='' />
                <h3>
                  SAWM <br />
                  (FASTING)
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.pillarsMaindiv1}>
            <div className={styles.pillarMainImg}>
              <img src='images/Asset 3.png' alt='' />
              <div className={styles.PilarsMainImg2}>
                <img src='images/zakat.png' alt='' />
                <h3>
                  ZAKAT <br />
                  (AlMSGIVING)
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.pillarsMaindiv1}>
            <div className={styles.pillarMainImg}>
              <img src='images/Asset 3.png' alt='' />
              <div className={styles.PilarsMainImg2}>
                <img src='images/hajj.png' alt='' />
                <h3>
                  HAJJ <br />
                  (PILGRIMAGE)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PilarsOfIslam
