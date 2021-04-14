import React from 'react';
import './App.css';
import Routes from './Routes';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <Routes />
    <div className="footer-content">
      <Footer />
    </div>
  </div>
);

export default App;
