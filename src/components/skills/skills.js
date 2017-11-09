import React from 'react';
import styles from './skills.sass';

const Skills = () => {

  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        Tech I've Worked With
      </div>

      <div className={styles.tech}>
        <ul className={styles.sTree1}>
          <li>
            <i className="devicon-react-original-wordmark"></i>
          </li>
          <li>
            <i className="devicon-python-plain-wordmark"></i>
          </li>
          <li>
            <i className="devicon-nodejs-plain-wordmark"></i>

          </li>
          <li>
            <i className="devicon-postgresql-plain-wordmark"></i>

          </li>
          <li>
            <i className="devicon-webpack-plain-wordmark"></i>

          </li>
        </ul>

        <ul className={styles.sTree2}>
          <li>
            <i className="devicon-swift-plain-wordmark"></i>
          </li>
          <li>
            <i className="devicon-angularjs-plain-wordmark"></i>
          </li>
          <li>
            <i className="devicon-mongodb-plain-wordmark"></i>
          </li>
          <li>
            <i className="devicon-amazonwebservices-plain-wordmark"></i>
          </li>
          <li>
            <i className="devicon-gulp-plain"></i>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Skills;