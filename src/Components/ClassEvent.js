import React, { Component } from 'react'

 class ClassEvent extends Component {
     handleChange(){
        console.log('clicked me')
    }
  render() {
   
    return (
      <div><button onClick ={this.handleChange}>Click me</button></div>
    )
  }
}
export default ClassEvent
