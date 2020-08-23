import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Sugan'
  }
  
  usernameChangeHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  render() {
    return (
      <div>
        <UserInput changed     ={this.usernameChangeHandler}
                   currentName = {this.state.userName}/>
        <UserOutput userName   = {this.state.userName}/>
      </div>
    );
  }

}

export default App