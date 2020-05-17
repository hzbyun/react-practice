import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // useState takes 2 elements
  // 1. Current state
  // 2. function to update the states

  // const [..] <- It is called Destructuring assignment
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'James', age: 32},
      { name: 'Isabella', age: 31}
    ]
  });

  const switchNameHandler = () => {
    // Important : setPersonsState does NOT merge a state, BUT replace a state.
    // That is why seggregating useState for each business case is a common practice.
    setPersonsState({
        persons: [
        { name: 'James', age: 31},
        { name: 'Isabella', age: 30}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      {/* DO NOT add () at the end of this.switchNameHandler
          this.switchNameHandler() means it will excute this function whenever render components
          Just assign the reference by removing () at the end
      */}
      <button onClick={switchNameHandler}>Change Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}> props.children will render this </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
    </div>
  );
}

export default app;