import React, { Component } from 'react'

export class RenderProps extends Component {
  render() {
    return (
      <div><h2>{this.props.render(true)}</h2></div>
    )
  }
}

export default RenderProps