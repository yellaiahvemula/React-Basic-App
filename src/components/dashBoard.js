import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

export default class DashBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            desc: '',
            amount: 0,
            done: false,
            msg : ''
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
        axios.get('/getData').then((res)=> {
            this.setState({done: true});
            console.log(res.data);
            this.setState({msg: res.data});
        });
        e.preventDefault();
    }

    render() {
        let message = this.state.done ? this.state.msg : '';
        return (
            <div>
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

            <h2>{message}</h2>
            </div>
        );
    }
}