import React, { Component } from 'react';
import './App.css';
import NumberPlate from './NumberPlate/NumberPlate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colCount: 0,
      rowCount: 0
    }
  }

  updateColumnCountHandler = (e) => {
    this.setState({
      colCount: e.target.value
    });
  }

  updateRowCountHandler = (e) => {
    this.setState({
      rowCount: e.target.value
    });
  }

  rollNumberHandler = () => {
    this.setState({});
  }
  
  render() {
    const rows = [];
    for (var i = 0; i < this.state.rowCount; i++) {
      rows.push(<NumberPlate key={i} colCount={this.state.colCount}/>);
    }

    return (
      <div className="App">
        <h1>Hi, I'm a Random number generator</h1>
        <input type="text" placeholder="column" onChange={this.updateColumnCountHandler}></input>
        <input type="text" placeholder="row" onChange={this.updateRowCountHandler}></input>
        <button onClick={this.rollNumberHandler}>Re-roll</button>
        {rows}
      </div>
    );
  }
}

export default App;
