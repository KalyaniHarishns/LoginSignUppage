// App.js

import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <Router>
        <div>
        <Navbar/>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
         
    </div>
    </Router>
  );
}

export default App;
