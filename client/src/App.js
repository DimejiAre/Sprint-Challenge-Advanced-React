import React from 'react';
import './App.css';
import Players from './components/Players';
import Navbar from './components/NavBar';

function App() {
    return (
      <div className="App">
        <Navbar />
        <Players />
      </div>
    );
}

export default App;
