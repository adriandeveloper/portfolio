import React from 'react';
import styles from './Main.scss';

const Main = () => (
  <main className={styles.mainWrapper}>
    <div>
      <p className={styles.myName}>adrian thomas</p>
    </div>
    <div>
      <ul className={styles.mainUl}>
        <li className={styles.mainLi}>React Native engineer</li>
        <li className={styles.mainLi}>|</li>
        <li className={styles.mainLi}>IOS engineer</li>
        <li className={styles.mainLi}>|</li>
        <li className={styles.mainLi}>Full Stack engineer</li>
      </ul>
    </div>
  </main>
);

export default Main;
