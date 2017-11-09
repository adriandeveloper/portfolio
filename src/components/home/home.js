import React from 'react';
import styles from './home.sass';
import Nav from '../nav/nav.js';

const Home = () => {
  return (
    <div className={styles.container}>
        <Nav />

    <section className={styles.aboutMe} >
      <div className={styles.bgImg}>
      </div>

      <div>
        <p className={styles.mainDesc}>
          Hi, I'm Adrian 👋🏾 
          <br />
          I'm a Mobile Engineer
          <br />
          from Houston, TX
        </p>
        
        <p className={styles.subDesc}>
          I also a Full Stack Developer too.
        </p>
      </div>
    </section>

    </div>
  )
}
export default Home;
