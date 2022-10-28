import React, { Component } from 'react'
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Input from './components/Input';

 class App extends Component{
  constructor(props){
     super(props);

    this.state ={
      input :"",
      previousNumber :"",
      currentNumber :"",
      operator :""
    };
  }
      addInput = val=>{
        this.setState({input :this.state.input + val });
      }
      addDecimal = val =>{
        if(this.state.input.indexOf(".")===-1){
          this.setState({input :this.state.input +val})
        }
      }
      addZeroToInput = val =>{
        if(this.state.input !== ""){
          this.setState({input :this.state.input +val})
        }   
    };
    clearInput = ()=>{
      this.setState({input:""})
    }
    add =()=>{
        this.state.previousNumber =this.state.input;
        this.setState({input :""});
        this.state.operator ="plus" ;
    }
    subtract =()=>{
      this.state.previousNumber =this.state.input;
      this.setState({input :""});
      this.state.operator ="subtract" ;
  }
  multiply =()=>{
    this.state.previousNumber =this.state.input;
    this.setState({input :""});
    this.state.operator ="multiply" ;
}
divide =()=>{
  this.state.previousNumber =this.state.input;
  this.setState({input :""});
  this.state.operator ="divide" ;
}
    evaluate =()=>{
      this.state.currentNumber = this.state.input;
      if(this.state.operator==="plus"){
          this.setState({input:parseInt(this.state.previousNumber)+ 
            parseInt(this.state.currentNumber)})
      }else if(this.state.operator==="subtract"){
        this.setState({input:parseInt(this.state.previousNumber)-
           parseInt(this.state.currentNumber)})
          }else if(this.state.operator==="multiply"){
            this.setState({input:parseInt(this.state.previousNumber)*
               parseInt(this.state.currentNumber)})
              }else if(this.state.operator==="divide"){
                this.setState({input:parseInt(this.state.previousNumber)/
                   parseInt(this.state.currentNumber)})
      }
    }
    multiply
    divide
    
      render(){
  return (
    <div className="App">
     <div className="calc-wrapper">
       <div>
         <Input>{this.state.input}</Input>
       </div>
            <div className="row">
              <Button handleClick={this.addInput}>7</Button> 
              <Button handleClick={this.addInput}>8</Button> 
              <Button handleClick={this.addInput}>9</Button> 
              <Button handleClick={this.divide}>/</Button> 
            </div>
            <div className="row">
              <Button handleClick={this.addInput}>4</Button> 
              <Button handleClick={this.addInput}>5</Button> 
              <Button handleClick={this.addInput}>6</Button> 
              <Button handleClick={this.multiply}>*</Button> 
            </div>
            <div className="row">
              <Button handleClick={this.addInput}>1</Button> 
              <Button handleClick={this.addInput}>2</Button> 
              <Button handleClick={this.addInput}>3</Button> 
              <Button handleClick={this.add}>+</Button> 
            </div>
            <div className="row">
              <Button handleClick={this.addDecimal}>.</Button> 
              <Button handleClick={this.addZeroToInput}>0</Button> 
              <Button handleClick={this.evaluate}>=</Button> 
              <Button handleClick={this.subtract}>-</Button> 
            </div>
            <div class="row">
              <ClearButton handleClear={this.clearInput}>ClearButton</ClearButton>
            </div>
            
     </div>
    </div>
  );
}
}

export default App;
