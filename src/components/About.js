import React from "react";
import demoImage from './demo.png';


function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={demoImage} alt="I made this" />
    </div>
  );
}
export default About;