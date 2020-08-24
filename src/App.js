import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css'
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    userName   : 'Sugan',
    showPersons: false,
    userInput  : '',
    persons: [
      {id: '1', name: 'Sugan', age: 29},
      {id: '2', name: 'Gokul', age: 12},
      {id: '3', name: 'Gautam', age: 11}
    ]
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

  inputChangeHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }
  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person click   = {() => this.deletePersonHandler(index)}
                           name    = {p.name} 
                           age     = {p.age}
                           key     = {p.id}
                           changed = {(event) => this.usernameChangeHandler(event, p.id)} />
          })}
        </div>
      );
    }

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char 
              character={ch} 
              key={index}
              clicked={() => this.deleteCharHandler(index)}/>
    })

    const classes = []
    if(this.state.persons.length <= 2) 
      classes.push('res')
    if(this.state.persons.length <= 1)
      classes.push('bold')

    return (

        <div className='App'>
          <UserInput changed     = {this.nameChangeHandler}
                    currentName = {this.state.userName}/>
          <UserOutput userName   = {this.state.userName}/>
        
          <button className = 'button'
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

          <hr/>
          <input type='text'
                onChange= {this.inputChangeHandler}
                value   = {this.state.userInput}/>
          <p className={classes.join(' ')}>{this.state.userInput}</p>
          <Validation inputLength = {this.state.userInput.length}/>
          {charList}
        </div>
      
    );
  }

}

export default App