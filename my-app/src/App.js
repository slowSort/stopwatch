import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatches: [
       { id: 1, name: 'Workout', time: 67, isOn: false },
       { id: 2, name: 'Cleaning', time: 500, isOn: false },
       { id: 3, name: 'Cooking', time: 295, isOn: false },
      ]
    };
    this.addStopwatch = this.addStopwatch.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  addStopwatch(newStopwatch) {
    this.setState({
      stopwatches: [...this.state.stopwatches, newStopwatch]
    })
  }

  handleDelete(id) {
      const stopwatches = this.state.stopwatches.filter((stopwatch) => stopwatch.id !== id)
      this.setState({stopwatches})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Custom Stopwatch</h1>
        {ReturnStopwatches(this.state.stopwatches, this.handleDelete)}
        <NameForm stopwatches={this.state.stopwatches} addStopwatch={this.addStopwatch}></NameForm>
        </header>
      </div>
    );
  }
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
    const newStopwatch = {
      id: this.props.stopwatches.length + 1,
      name: this.state.stopwatchName,
      time: parseInt(this.state.stopwatchTime),
      isOn: false
    }
    this.props.addStopwatch(newStopwatch)
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

function ReturnStopwatches(stopwatches, onSubmit) {
  return (
      stopwatches.map(({id, name, time}) =>
        <li key={id}>{name} Time: {time} <button type="submit" onClick={() => {
          onSubmit(id)

        }}>Delete</button></li>
      )
  );
}

export default App;
