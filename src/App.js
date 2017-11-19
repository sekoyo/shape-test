import React from 'react';
import TileLayoutMgr from './components/TileLayoutMgr';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-Header">
      <img src={logo} className="App-Logo" alt="logo" />
      <h1 className="App-Title">Tile Manager</h1>
    </header>
    <TileLayoutMgr />
  </div>
);

export default App;
