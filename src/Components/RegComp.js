import React from 'react';


class RegComp extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        console.log("Regular Render")
        return <div>

            Regular Component {this.props.name}
        </div>;
    }
}


export default RegComp;