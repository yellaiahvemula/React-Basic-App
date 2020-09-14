import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            desc: '',
            amount: 0
        };
    }

    handleChange(e) {
        if(e.target.name === 'description') {
            this.setState({desc: e.target.value});
        } else {
            this.setState({amount: e.target.value});
        }
    }

    handleSubmit(e) {
        console.log(this.state)
        // axios.post('');
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Description: 
                    <input type='text' name='description' onChange={this.handleChange.bind(this)}></input>                    
                </label>
                <label>
                    Amount: 
                    <input type='number' name='amount' onChange={this.handleChange.bind(this)}></input>                    
                </label>

                <input type='submit' value='Submit'></input>
            </form>
        );
    }
}