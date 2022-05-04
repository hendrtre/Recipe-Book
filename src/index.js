import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecipeProvider } from "./data"
 
ReactDOM.render(
  <RecipeProvider>
    <App />
  </RecipeProvider>,
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

