import React, { Component } from 'react'

export class CounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementHandler = () => {
        this.setState(
            (prevState) => ({ count: prevState.count + 1 }
            )

        )
    }

    render() {
        console.log(this.state.count)
        return (
            <div> {this.props.renderCount(this.state.count, this.incrementHandler)}</div>
        )
    }
}

export default CounterTwo