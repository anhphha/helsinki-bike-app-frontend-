import React from "react";
import "../App.css";
import { Button2 } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>HELSINKI BIKE SEARCH</h1>
      <p>What are you looking for?</p>
      <div className="hero-btn">
        <Button2
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >JOURNEYS</Button2>
        <Button2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >STATIONS <i className='far fa-play-circle' />
        </Button2>
      </div>
    </div>
  );
}

export default HeroSection;
