import React, { Component } from 'react'
import updatedFunction from './UpdatedFunction'

export class HoverCounter extends Component {
  
  render() {
    return (
      <div onMouseOver={this.props.incrementCountHandler}>I hoved 
      {this.props.count} times</div>
    )
  }
}

export default updatedFunction(HoverCounter,10)