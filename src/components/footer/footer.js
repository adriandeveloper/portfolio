import React from 'react';
import styles from './footer.sass';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <span className={styles.contact}>
        <ul className={styles.footerUL}>
          <li className={styles.email}>info@adrianthomas.io</li>
          <li className={styles.phone}>+512.256.4583</li>
        </ul>
      </span>

      <span className={styles.social}>
        <ul className={styles.footerUL}>
          <li className={styles.linkedin}><a href="https://www.linkedin.com/in/adrianladrellthomas/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
          <li className={styles.github}><a href="https://github.com/adriandeveloper" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li className={styles.medium}><a href="https://medium.com/@adrianlthomas" target="_blank" rel="noopener noreferrer">Medium</a></li>
          <li className={styles.twitter}><a href="https://twitter.com/adriathomas" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </span>
    </footer>
  )
}

export default Footer;