import React from 'react';
import './App.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';
const App = () => (
  <div>
    <div>
      <Header />
    </div>
    <div>
      <Main />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default App;
