import React, { Component } from "react"
import Slider from "react-slick"

import RatatImage from "./../images/ratatouille.jpg"
import BeefRaImg from "./../images/BeefRamen.jpg"
import SteakSlab from "./../images/uncookSteak.jpg"
import Broc from "./../images/broccoli.jpg"

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        centerMode: true,
        // centerPadding: "10px",
        // adaptiveHight: true
      };
      return (
        <div className="Slider-container">
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
            <div>
                <img src={RatatImage} alt="RatatImage" />   
                <h3>Ratatouille</h3>           
            </div>
            <div>
                <img src={BeefRaImg} alt="BeefRaImg" />
                <h3>Beef Ramen</h3>           
            </div>
            <div>
                <img src={SteakSlab} alt="SteakSlab" />
                <h3>Steak</h3>           
            </div>
            <div>
                <img src={Broc} alt="Broc" />
                <h3>Veggies</h3>           
            </div>
          </Slider>
        </div>
      );
    }
  }