import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';

class App extends Component {

  state = {
    userName: 'Sugan',
    persons: [
      {name: 'Sugan', age: 29},
      {name: 'Gokul', age: 12},
      {name: 'Gautam', age: 11}
    ],
    showPersons: false
  }
  
  usernameChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font:            'inherit',
      border:          '1px solid blue',
      padding:         '8px',
      cursor:          'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Person name = {this.state.persons[0].name}
                  age  = {this.state.persons[0].age}/>

          <Person name = {this.state.persons[1].name}
                  age  = {this.state.persons[1].age}/>

          <Person name = {this.state.persons[2].name}
                age  = {this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div>
        <UserInput changed     ={this.usernameChangeHandler}
                   currentName = {this.state.userName}/>
        <UserOutput userName   = {this.state.userName}/>
      
        <button style={style}
                onClick = {this.togglePersonHandler}>Toggle Person</button>
        {persons}
        
        {/* {
          this.state.showPersons ? 
            <div>
              <Person name = {this.state.persons[0].name}
                      age  = {this.state.persons[0].age}/>

              <Person name = {this.state.persons[1].name}
                      age  = {this.state.persons[1].age}/>

              <Person name = {this.state.persons[2].name}
                    age  = {this.state.persons[2].age}/>
            </div> : null
        } */}
      </div>
    );
  }

}

export default App