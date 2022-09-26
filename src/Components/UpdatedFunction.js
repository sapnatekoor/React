import React from "react";

const updatedFunction = (OrignalComponent, incrementVal) =>{
  class newComponent extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           count : 0,
        }
      }
  incrementCountHandler =() =>{
      this.setState(prevState =>{
      return {count : prevState.count+ incrementVal}
      })
  }
    render(){
        return <OrignalComponent count = {this.state.count} incrementCountHandler= {this.incrementCountHandler} {...this.props}/>
    }
  }
  return newComponent
}

export default updatedFunction