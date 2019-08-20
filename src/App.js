import React from 'react';
import './App.css';
import Joke from './Joke'
import jokesData from './jokesData'
function App() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const doubled = nums.map(function(num){
    return num * 2
  })
  console.log(doubled)
  return (
    <div className="App">
        <h1>{doubled}</h1>
        <Joke/>
        <Joke/>
        <Joke/>
    </div>
  );
}

export default App;
