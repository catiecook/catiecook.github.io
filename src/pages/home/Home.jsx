import React from 'react';
import Arrow from '../../components/arrow-animation/ArrowAnimation.js';
import { Link } from 'react-router-dom'

import './home.css';

function Home() {
  return (
    <div id="gradient_animation" className="container">
      <div className="mainh italic">
        <span>Hey,</span>
        <br />
        <span>I'm Catie Cook</span>
        <br />
        <Link to="/about"><div id="arrow-conatiner"><Arrow /></div></Link>
      </div>
    </div>
  );
}

export default Home;
