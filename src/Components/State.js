import React, { Component } from 'react'

export default class State extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Hello Visitor',
            buttonText : 'Subscribe'
        }
    }


    handleChange = () =>{
        this.setState({
            message : 'Thank you for subscribing',
            buttonText : 'Subscribed' 
        })
    }
  
  render() {
   
    return (
      <div><h3>{this.state.message}</h3>
      <button onClick = {this.handleChange} >{this.state.buttonText}</button>
      </div>
    )
  }
}
