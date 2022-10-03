import React from 'react';

class PureComp extends React.PureComponent {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        console.log("Pure Render")

        return <div> 
PureComp {this.props.name}

        </div>;
    }
}



export default PureComp;