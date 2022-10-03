import React from 'react';

class InputRef extends React.Component {
constructor(props) {
    super(props);

    this.input = React.createRef()
}

componentDidMount(){
    this.input.current.focus()
}
    render() {
        return <div>
            <input type="text" ref={this.input} />
        </div>;
    }
}


export default InputRef;