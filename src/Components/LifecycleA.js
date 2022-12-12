import React from 'react';
import LifeycleB from './LifeycleB';

class LifecycleA extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        name:'sapna'
    };
    console.log("LifecycleA Constructor")
}

static getDerivedFromProps(props,state){
    console.log("LifecycleA getDerivedFromProps");
    return null;
}
componentDidMount(){
    console.log("LifecycleA componentDidMount")

}

shouldComponentUpdate(nextProps, nextState){
    console.log("LifecycleA shouldComponentUpdate");
    return true;
}

getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;

}
componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate");

}

onChange(){
    this.setState({
        name:'Tekoor'
    })
}


    render() {
        console.log("LifecycleA Render")
        return <div>
            {this.state.name}
            <button onClick={this.onChange()}>Change</button>
            <LifeycleB/>
        </div>;
    }
}



export default LifecycleA;