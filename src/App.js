import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Sugan", age: "28" },
      { name: "Gokul", age: "12" },
      { name: "Gautam", age: "10" },
    ],
  };

  switchNameHandler = () => {
    console.log("Was clicked");
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi..</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi, i 'm a react app")
    // );
  }
}

export default App;
