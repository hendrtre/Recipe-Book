import React from 'react'
import './App.css';
import Header from './components/Header'; 
import Accordion from './components/Accordion'; 

function App() {
  // const accordianData = {
  //   title: "Ratatouille",
  //   directions: '1. Preheat Oven and Prepare Ratatouille Ingredients: Preheat oven ',
  // }
  // const { title, content } = accordianData

  return (
      <div className="App">
        <div className='container'>
          <h1>Trents Recipe Book</h1>
          <Header />
                {/* ... */}
          <Accordion /> 
        </div>
      </div>
  );
}

export default App;
