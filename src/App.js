import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'; 
import AddRecipePage from './addRecipePage';

function App() {

  return (
    <Router>
      <div className='Links'>
        <h1 className='heading'>hendrickson digital recipe book</h1>
        <div className='pages'>
          <Link to="/">Back</Link>
          <Link to="/add-recipe">+ Add Recipe</Link>
          <div>("back" will display none on home page.)</div>
          <div>("+ Add Recipe" will display none on addRecipePage page.)</div>
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
