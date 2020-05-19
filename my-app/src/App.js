import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';


class App extends Component {
  state= {
    userNames:['bocacrst','adi69420','cocalaruSexMachine']
  }

  changeName = ()=>{
    this.setState({
      userNames:['bocacrst','adi69420','blood4mylove']
    })
  }

  inputChange =(event)=>{
    this.setState({
      userNames:['bocacrst','adi69420', event.target.value]
    })

  }
  render(){
    return (
      <div className="App">
        <UserInput change = {this.inputChange} username= {this.state.userNames[2]} />
        <UserOutput username= {this.state.userNames[2]}  />
        <button onClick ={this.changeName}>Change</button>
       
      </div>
    );
  }
}

export default App;
