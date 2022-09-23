import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogged: true,
        }
    }
    render() {
        // let message 
        // if(this.state.isLogged){
        //     message = <div> Hello Sapna</div>
        // }
        // else{
        //     message = <div> Hello Visitor</div>
        // }

        //    if(this.state.isLogged){
        //     return <div> Hello Sapna</div>
        //    }
        //    else{
        //     return <div> Hello Visitor</div>
        //    }

        // return <h1>{this.state.isLogged ? 'Hello Sapna': 'Hello Visitor'}</h1>
        return this.state.isLogged && <h1>Hello Sapna</h1>

    }
}

export default ConditionalRendering