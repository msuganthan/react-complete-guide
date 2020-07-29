import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Sugan'
  }

  /**
   * This is a function which is invoked on change event. 
   * So I am taking event as a parameter and the setting the state.
   */
  usernameChangeHandler = (event) => {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <div>
        {/* Configuring the components here*/}
        {/* changed and currentName is a props.*/}
        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.userName}
        />
        
        {/*Username is a prop for that we are setting the state name*/}
        <UserOutput 
          userName={this.state.userName}
        />
      </div>
    )
  }
}

export default App