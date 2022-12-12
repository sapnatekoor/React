import React from 'react';

class BasicForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            textArea: '',
            selectValue: 'React',
        };
    }
    userNameHandler = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    textHandler = (event) => {
        this.setState({
            textArea: event.target.value
        })
    }
    selectHandler = (event) => {
        this.setState({
            selectValue: event.target.value
        })
    }
submitHandler =(event) =>{
    alert(`${this.state.userName}, ${this.state.textArea}, ${this.state.selectValue}`);
    event.preventDefault()
}

    render() {
        return <div>
            <form onSubmit ={ this.submitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.userName} onChange={
                        this.userNameHandler
                    } />
                </div>
                <div>
                    <label>Comments:</label>
                    <input type="text" value={this.state.textArea} onChange={
                        this.textHandler
                    } />
                </div>
                <div>
                    <select value={this.state.selectValue} onChange={
                        this.selectHandler
                    }>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>

                    </select>
                </div>
<button>Submit</button>
            </form>
        </div>
    }
}


export default BasicForm;