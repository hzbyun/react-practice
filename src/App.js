import React, { Component } from 'react';
import './App.css'; // thanks to WebPack, we can import css onto js file
import Person from './Person/Person';


class App extends Component {
  // this state is the only property that we can use under the class inherited by Component
  // *if this state is changed, react render this component. (run render() again)
  state = {
    persons: [
      { name: 'James', age: 32 },
      { name: 'Isabella', age: 31 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 10 },
        { name: 'Isabella', age: 10 }
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (<Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
            />)
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>

        {/*
          () => this.switchNameHandler(...) vs this.switchNameHandler.bind(this, ...)
          These 2 are same..
          but this.switchNameHandler.bind(this, ...) is preferred.     
        */}
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement(
    //   'div', 
    //   {className: 'App'}, 
    // React.createElement('h1', null, 'Hi, Hello !!'));
  }
}

export default App;
