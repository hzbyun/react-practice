import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="James" age="32"/>
        <Person name="Isabella" age="31"/>
      </div>
    );

    // return React.createElement(
    //   'div', 
    //   {className: 'App'}, 
    // React.createElement('h1', null, 'Hi, Hello !!'));
  }
}

export default App;
