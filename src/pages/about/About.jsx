import React from 'react';
import './about.scss';

function About() {
  return (
    <div id="container" class="gradient-letters text-styling">
      <p><span className="gradient-letters  bold-font">I'm a front end engineer living in Denver, Colorado</span>
        <br />
        Find me professionally here: <a href="https://www.linkedin.com/in/catiecook/" target="blank">LinkedIn</a>
        <br />
        Visually here: <a href="https://instagram.com/catiecook" target="blank"> Instagram</a>
        <br />
        Or email me at <a>hello@catiecook.com</a>
      </p>

    </div>
  );
}

export default About;
