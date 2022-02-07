import logo from './logo.svg';
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import Bread from './components/sub-components/bread';
import "./App.css";
import React, { useState } from 'react';
import { FaCopyright } from 'react-icons/fa';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <Bread/>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
