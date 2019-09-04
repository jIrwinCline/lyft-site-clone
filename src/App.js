import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import Apply from './Apply.js'
import City from './img/city.gif'
import {Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
    // <BrowserRouter >
    //   <Route path=""
      <img src={City} className="picture">
      </img>
      <Apply />
      <Footer />
    // </BrowserRouter >
    </div>

  );
}

export default App;
