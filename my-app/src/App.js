import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  state= {
    userNames:['bocacrst','adi69420','cocalaruSexMachine']
  }
  render(){
    return (
      <div className="App">
        <UserInput/>
        <UserOutput username= {this.state.userNames[2]}/>
       
      </div>
    );
  }
}

export default App;
