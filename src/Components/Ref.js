import React from 'react';
import InputRef from './InputRef';

class Ref extends React.Component {
constructor(props) {
    super(props);
    this.inputRef = React.createRef()
}

componentDidMount(){
    this.inputRef.current.focusInput()
}

// onClickHandler(){
//     console.log(this.inputRef.current)
//     this.inputRef.current.focus()
// }

    render() {
        return <div>
            <input type="text" /* ref={this.inputRef} *//>

            <InputRef ref={this.inputRef}/>
            <button onClick={this.onClickHandler}>Click</button>
        </div>;
    }
}


export default Ref;
