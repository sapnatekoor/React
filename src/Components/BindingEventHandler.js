import React, { Component } from "react";

class BindingEventHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:'hello World',
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
   this.setState({
    message:'Welcome'
   })
console.log(this,"jjjjj")

  }

  render() {
    
    return <div><p>{this.state.message}</p>
    <button onClick = {this.handleClick}>Click Here</button>
    </div>;
  }
}

export default BindingEventHandler;
