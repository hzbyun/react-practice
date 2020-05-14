import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, Hello</h1>
    //   </div>
    // );

    // ^
    // |
    // |
    // the code below is same as above. Cumbersome to write.. This is why 
    // jsx (above) is really needed and helps us.
    return React.createElement(
      'div', 
      {className: 'App'}, 
    React.createElement('h1', null, 'Hi, Hello !!'));
  }
}

export default App;
