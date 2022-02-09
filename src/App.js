import logo from './logo.svg';
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import Delivery from './components/sub-components/bread';
import "./App.css";
import React, { useState } from 'react';
import { FaCopyright } from 'react-icons/fa';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <Delivery title={"Bread"} timeTarget={10} />
      <Delivery title={"Produce"} timeTarget={15} />
      <Delivery title={"Chilled Produce"} timeTarget={15} />
      <Delivery title={"Short-Life"} timeTarget={30} />
      <Footer className="footer"/>
    </div>
  );
}

export default App;
