import React from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

import Home from './components/Home'; 
import AddRecipePage from './addRecipePage';

function App() {
  // const location = useLocation()

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
