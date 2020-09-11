import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './layouts/Header';
import App from './App';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      title: 'Welcome !',
    }
  }

  getInitialState() {
    console.log(this.state);

    return {
      count : 1,
    }    
  }

  getDefaultProperties() {
    this.props ={
      name : 'John'
    }
    console.log(this.props);
  }

  componentWillMount() {
    console.log(this.props.name);
    console.log(this.state);
    console.log('ComponentWillMount');
    this.getDefaultProperties();
    this.getInitialState();
  }

  componentDidMount() {
    console.log(this.state);
    console.log(this.props.name);
    console.log('ComponentDidMount');
  }

  changeTitle(title){
    this.setState({title});
  }

  render(){  
    return(
      <div>
        <Header 
        changeTitle={this.changeTitle.bind(this)} 
        title={this.state.title}/>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Layout />,
//   document.getElementById('root')
// );

const clockDOM = document.getElementById('clock');

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      comment: 'Hello Clock..!',
      counter: 0,
    }
  }
  cpmWillMount = new Date(Date.now());

  componentDidMount(){
    const timerID = setInterval(
      () => this.tick(),
      1000
    );
    
    console.log(this.cpmWillMount);

  }

  componentWillUnmount(){
    this.cpmWillMount = new Date(Date.now());
    console.log(this.cpmWillMount);
    clearInterval(this.timerID);    
  }

  tick(){
    this.setState({
      date: new Date(),
    });

    // this.state.comment = 'NEW TEXT'; it works but give warning
    // this.setState({comment: 'HELLO NEW TEXT'});
    this.setState((state, props) => ({      
      comment: `HELLO NEW TEST - ${state.counter + 1}`
    }));    
    // this.setState({count: this.state.counter + 1});
    this.setState((state, props) => ({
      counter: state.counter + 1
    }));
  }

  render(){
    return(
      <div>
        <h1>{this.state.comment}</h1>
        <h1>{this.state.counter}</h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>      
    );
  }  
}

function Clockapp() {
  return(
    <div>
      <Clock />
      <Clock />
      <Clock />    
    </div>
  );
}

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.handleclick = this.handleclick.bind(this);
  }

  handleclick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  checkTest = () => {
    console.log(this);
  }

  render(){
    return(
      <div>
        <button onClick={this.handleclick}>
          {this.state.isToggleOn ? 'ON':'OFF'}
        </button>

        <div>
          <button onClick={this.checkTest}>Check test</button>
        </div>
      </div>
    );
  }
}

  // ReactDOM.render(
  //     <Toggle />,
  //     clockDOM
  // );

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
