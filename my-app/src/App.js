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
      <NameForm></NameForm>
      </header>
    </div>
  );
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchName: '',
      stopwatchTime: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.stopwatchName + ' And a time: ' + this.state.stopwatchTime);
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="stopwatchName" type="text" value={this.state.stopwatchName} onChange={this.handleChange} />
          </label>
          <label>
            Time:
            <input name="stopwatchTime" type="number" value={this.state.stopwatchTime} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
    );
  }
}

function ReturnStopwatches() {
  return (
      Stopwatches.map(({id, name, time}) =>
        <li key={id}>{name} Time: {time}</li>
      )
  );
}

export default App;
