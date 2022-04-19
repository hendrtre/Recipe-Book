import React from "react";  

import TestImage from "./../images/pirateCoin.jpg"

import Accordion from "./Accordion";

const Home = () => {
  return (
    <div className='container'>
      <img src={TestImage} alt="ImageHere" />
      <h6>(This will be a image carrosel from the recipes below.)</h6>
      <h6>(If time make it possible to click on image and it will scroll down and open the recipe associated with the image.)</h6>
      <Accordion />
    </div>
  )
};
  
export default Home;