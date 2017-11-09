import React, { Component } from 'react';
import styles from './app.sass';

import Home from './home/home.js';
import Portfolio from './portfolio/portfolio.js';
import Skills from './skills/skills.js';
import Contact from './contact/contact.js';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    )
  }
}

export default App;