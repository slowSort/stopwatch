import React from 'react';
import './App.css';

const Stopwatches = [
 { id: 1, name: 'Workout', time: 67, isOn: false },
 { id: 2, name: 'Cleaning', time: 500, isOn: false },
 { id: 3, name: 'Cooking', time: 295, isOn: false },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Custom Stopwatch</h1>
      {ReturnStopwatches()}
      <form>
        <input type="text" id="name" name="name"/>
        <input type="submit" value="Add"/>
      </form>
      </header>
    </div>
  );
}

function ReturnStopwatches() {
  return (
      Stopwatches.map(({id, name, time}) =>
        <li key={id}>{name} Time: {time}</li>
      )
  );
}

export default App;
