import React from 'react';
import './App.css';
import Players from './components/Players';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h2>Women's World Cup</h2>
        <Players />
      </div>
    );
  }
}

export default App;
