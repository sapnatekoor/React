import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetFunction = this.greetFunction.bind(this);
  }

  greetFunction(childComp) {
    alert(`Hello ${this.state.parentName} from ${childComp}`);
  }

  render() {
    return (
      <div>
        <Child greetFunction={this.greetFunction} />
      </div>
    );
  }
}

export default Parent;
