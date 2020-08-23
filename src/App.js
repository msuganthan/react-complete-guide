import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';

class App extends Component {

  state = {
    userName: 'Sugan',
    persons: [
      {id: '1', name: 'Sugan', age: 29},
      {id: '2', name: 'Gokul', age: 12},
      {id: '3', name: 'Gautam', age: 11}
    ],
    showPersons: false
  }
  
  usernameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = { ...this.state.persons[personIndex] };
    person.name  = event.target.value;

    const persons        = [...this.state.persons]
    persons[personIndex] = person;
    
    this.setState({persons: persons})
  }

  nameChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
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
          {this.state.persons.map((p, index) => {
            return <Person click = {() => this.deletePersonHandler(index)}
                           name  = {p.name} 
                           age   = {p.age}
                           key   = {p.id}
                           changed = {(event) => this.usernameChangeHandler(event, p.id)} />
          })}
        </div>
      )
    }

    return (
      <div>
        <UserInput changed     = {this.nameChangeHandler}
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