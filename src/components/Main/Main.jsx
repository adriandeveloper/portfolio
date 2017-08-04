import React from 'react';
import Social from '../Social/Social.jsx';
import styles from './Main.scss';

const Main = () => (
  <main className="mainWrapper">
    <div>
      <p className="myName">adrian thomas</p>
    </div>
    <div>
      <ul className="mainUl">
        <li className="mainLi">React Native engineer</li>
        <li className="mainLi">|</li>
        <li className="mainLi">IOS engineer</li>
        <li className="mainLi">|</li>
        <li className="mainLi">Full Stack engineer</li>
      </ul>
    </div>
    <Social />
  </main>
);

export default Main;
