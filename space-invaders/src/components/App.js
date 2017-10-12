import React, { Component } from 'react';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Parking Hall of Shame</h1>
        </header>
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
