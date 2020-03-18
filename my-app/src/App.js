import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Custom Stopwatch</h1>
      <form>
      <input type="text" id="name" name="name"/>
      <input type="submit" value="Add"/>
      </form>
      </header>
    </div>
  );
}

export default App;
