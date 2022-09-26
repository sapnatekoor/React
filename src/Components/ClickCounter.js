import React, { Component } from 'react'
import updatedFunction from './UpdatedFunction'

export class ClickCounter extends Component {


  render() {
    return (
      <div><button onClick={this.props.incrementCountHandler}>{this.props.name} Click {this.props.count}</button></div>
    )
  }
}

export default updatedFunction(ClickCounter,5)