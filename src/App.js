import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // this state is the only property that we can use under the class inherited by Component
  // *if this state is changed, react render this component. (run render() again)
  state = {
    person: [
      { name: 'James', age: 32},
      { name: 'Isabella', age: 31}
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Change Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}> props.children will render this </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      </div>
    );

    // return React.createElement(
    //   'div', 
    //   {className: 'App'}, 
    // React.createElement('h1', null, 'Hi, Hello !!'));
  }
}

export default App;
