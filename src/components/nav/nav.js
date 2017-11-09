import React from 'react';
import styles from './nav.sass';
import { Link } from 'react-scroll';

const Nav = () => {
  return(
      <nav className={styles.menu}>
        <ul>
          <li>
            <Link offset={-81} to="about" smooth>
              About
            </Link>
           </li>
          <li>
            <Link offset={-81} to='projects' smooth>
              Projects
            </Link>
          </li>
          <li>
            <Link offset={-81} to='skills' smooth>
              Skills
            </Link>
           </li>
          <li>
            <Link offset={-81} to='contact' smooth>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;
