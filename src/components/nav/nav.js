import React from 'react';
import styles from './nav.sass';


const Nav = () => {
  return(
      <nav className={styles.menu}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </nav>
  )
}

export default Nav;
