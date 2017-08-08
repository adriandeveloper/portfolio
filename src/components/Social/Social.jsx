import React from 'react';
import styles from './Social.scss';

const Social = () => (
  <div className={ styles.socialContainer }>
    <ul className={styles.socialUl}>
      <li className={styles.socialLi}><a href="https://github.com/adriandeveloper" target="_blank" rel="noopener noreferrer"><i className="fa fa-github-alt" aria-hidden="true"></i></a></li>
      <li className={styles.socialLi}><a href="https://twitter.com/adriathomas" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li className={styles.socialLi}><a href="https://medium.com/@adrianlthomas" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium" aria-hidden="true"></i></a></li>
      <li className={styles.socialLi}><a href="https://www.linkedin.com/in/adrianladrellthomas/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
    </ul>
  </div>
)

export default Social;
