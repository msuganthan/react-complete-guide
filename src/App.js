import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  //The function which you pass in here does not merge what ever you pass to it, instead to replace.
  const [personState, setPersonsState] = useState({
    persons: [
      { name: "Sugan", age: "28" },
      { name: "Gokul", age: "12" },
      { name: "Gautam", age: "10" },
    ],
  });

  console.log(personState);

  const switchNameHandler = () => {
    //DON'T DO THIS: this.state.persons[0].name = "Suganthan Madhavan Pillai";
    setPersonsState({
      persons: [
        { name: "Suganthan Madhavan Pillai", age: "28" },
        { name: "Gokul", age: "12" },
        { name: "Gautam", age: "10" },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hi..</h1>
      <p>This is working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}>
        My hobbies: Racing
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi, i 'm a react app")
  // );
};

export default app;
