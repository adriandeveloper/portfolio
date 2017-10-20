import React from 'react';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Social from './components/Social/Social.jsx';
import Main from './components/Main/Main.jsx';

const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <div>
      <Main />
    </div>
    <div>
      <Social />
    </div>
  </div>
);

export default App;
