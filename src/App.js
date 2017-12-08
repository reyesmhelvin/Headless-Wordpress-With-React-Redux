import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import News from './components/news/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Latest News</h1>
        </header>
        <Router>
            <News />
        </Router>
      </div>
    );
  }
}

export default App
