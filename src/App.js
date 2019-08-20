import React from 'react';
import './App.css';
import Joke from './Joke'
import jokesData from './jokesData'
function App() {
const jokesComponents = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
 
  return (
    <div className="App">
      {jokesComponents}
    </div>
  );
}

export default App;
