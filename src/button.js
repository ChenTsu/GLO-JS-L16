import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <button className={'clicker'} onClick={this.onButtonClick}>измени дизайн</button>
    )
  }
  
  onButtonClick(){
     document.getElementsByClassName('wrapper')[0].style.backgroundColor = '#F9F5A6FF';
  }
}

export default Button;