import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

// import mindNode
import MindNode from './components/MindNode.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MindNode />
      </div>
    );
  }
}

export default App;
