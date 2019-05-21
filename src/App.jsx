import React from 'react';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
        </div>
      </Router>
    );
  }
}

export default App;
