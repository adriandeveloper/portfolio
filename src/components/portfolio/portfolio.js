import React from 'react';
import styles from './portfolio.sass';

const Portfolio = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
       <p className={styles.sectionTitle}>
         Work I've Done
       </p>
      </div>

      <div className={styles.projects}>

        <div className={styles.voya}>
          <div className={styles.projectImg}>
            <div className={styles.voyaImg} />
          </div>

          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>VOYA</p>
            <p className={styles.projectDesc}>
              "Where driver
              <br />
              dedication funds
              <br />
              education"
            </p>
          </div>
        </div>

        <div className={styles.tutti}>
          <div className={styles.projectImg}>
            <div className={styles.tuttiImg} />
          </div>

          <div className={styles.projectDetails}>
            <p className={styles.projectTitle}>TUTTI</p>
            <p className={styles.projectDesc}>
              "Let's Talk"
            </p>
          </div>
        </div>
        
      </div>

        

    </section>
  )
}

export default Portfolio
