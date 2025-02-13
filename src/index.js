import React from 'react'
import ReactDOM from 'react-dom/client'
import MostWanted from './components/MostWanted.js'
import './index.css'
import Header from './components/Header'
import Top from './components/top.jsx';
import Divisions from './components/divisions.js';
import Section from "./components/section.js";
import Footer from "./components/Footer.js";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Top />
    <Divisions />
    <Section />
    <MostWanted />
    <Footer />
  </React.StrictMode>,
)
