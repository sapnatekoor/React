import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div> <p>My name is Class {this.props.name}</p></div>
    )
  }
}
