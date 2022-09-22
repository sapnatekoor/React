import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    incrementCount = () => {

        // this.state.count = this.state.count + 1;
        // this.setState({
        //     count:this.state.count + 1,
        // }, ()=>{ console.log(this.state.count,"Inside")
        // })
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => {
            console.log(this.state.count, "Inside Callback")
        })
        console.log(this.state.count, 'oustide')
    }

    incrementFive = () => {
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();

    }

    render() {
        return (

            <div>
                <h1>State</h1>
                <p>count : {this.state.count}</p>
                <button onClick={() => this.incrementFive()}>Counter</button>
            </div>
        )
    }
}

export default Counter