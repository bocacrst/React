import React, {Component} from 'react';
import './App.css';
import './CharComponent/CharComponent.css'
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state= {
    userImput: ''
    
    
  }

  inputLength = (event)=>{
     this.setState({
       userImput: event.target.value,
     
    });

    
  }
 
  deleteChar =(charIndex)=>{
    const valueIn = this.state.userImput.split('');
    valueIn.splice(charIndex,1);
    const updateVal = valueIn.join('');

    this.setState({

      userImput: updateVal
    
   });
   console.log(valueIn);
  }

  render(){

    const charList = this.state.userImput.split('').map((char, index) =>{
     return <CharComponent click = {()=>this.deleteChar(index)} character = {char} key={index} />

    });


    return (
      <div className="App">
       
        <input type='text' onChange = {this.inputLength} value={this.state.userImput}/>
        <ValidationComponent length = {this.state.userImput.length} />
       {charList}
       
      </div>
    );
  }
}

export default App;
