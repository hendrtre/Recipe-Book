import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import TestImage from './images/pirateCoin.jpg'

import Header from './components/Header'; 
import Accordion from './components/Accordion'; 
import AddRecipePage from './addRecipePage';

function App() {
const Home = () => {
  return (
    <div className='container'>
      <h1>Test</h1>
      <img src={TestImage} alt="ImageHere" />
      <Accordion />

    </div>
  )
}


  return (
    <Router>
      <div className='Links'>
        <h1 className='heading'>hendrickson digital recipe book</h1>
        <div className='pages'>
          <Link to="/">Back</Link>
          <Link to="/add-recipe">+ Add Recipe</Link>
        </div>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add-recipe" element={<AddRecipePage />} />
      </Routes>
    </Router>

  );
}

export default App;
