import React from 'react';
import './App.css';
import Counter from './counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter by={1}></Counter>
      <Counter by={5}></Counter>
      <Counter by={100}></Counter>

    </div>
  );
}

export default App;
