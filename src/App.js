import React, { Component } from 'react';
import './App.css';
import FileDownloader from './FileDownloader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>file drag-n-drop</h2>
        </div>

        <FileDownloader />

      </div>
    );
  }
}

export default App;
