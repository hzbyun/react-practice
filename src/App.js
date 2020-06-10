import React, { Component } from 'react';
import './App.css'; // thanks to WebPack, we can import css onto js file
import Person from './Person/Person';
import person from './Person/Person';

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

  switchNameHandler = (newAge) => {
    // Don't do this!! react does not recommend to mutate the state directly
    //this.state.persons[0].name = "Issachar"
    this.setState({
      persons: [
        { name: 'James', age: newAge },
        { name: 'Isabella', age: newAge }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 10 },
        { name: 'Isabella', age: 10 }
      ]
    })
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 40)}
            changed={this.nameChangeHandler}> props.children will render this </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
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
