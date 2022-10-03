import React, { Component } from 'react'

export default class ClickCounterTwo extends Component {
  render() {
    return (
        <div><button onClick={this.props.incrementCountHandler}>{this.props.name} Click {this.props.count}</button></div>    )
  }
}
