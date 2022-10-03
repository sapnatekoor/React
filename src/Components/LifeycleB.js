import React from 'react';



class LifeycleB extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:'sapna'
        };
        console.log("LifeCycleB Constructor")
    }
    
    static getDerivedFromProps(props,state){
        console.log("LifeCycleB getDerivedFromProps");
        return null;
    }
    
    componentDidMount(){
        console.log("LifeCycleB componentDidMount")
    
    }
    render() {
        return <div></div>;
    }
}



export default LifeycleB;