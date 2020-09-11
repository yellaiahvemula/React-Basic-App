import React from 'react';
import ReactDom from 'react-dom';
import  '../App.css';

export default class DynamicFrame extends React.Component {

    constructor(){
        super();
        this.state = {
            no: 1
        }
    }

    move(){
        console.log(`moving object`);
        // let no = 1;
        let customId = `child${this.state.no}`;
        console.log(customId);
        var ele = document.getElementById(customId); 
        var parentDom = document.getElementById('parent');
        let size = 10;
        ele.style.marginLeft = size + 'px';
        let childY = ele.getBoundingClientRect();
        let parentY = parentDom.getBoundingClientRect();
        console.log(ele.getBoundingClientRect().bottom);
        console.log(parentDom.getBoundingClientRect().bottom);
        
        let run = setInterval(() => {
            if(size === 380){
                clearInterval(run);
                console.log(`Reached end of the screen......`);
                console.log(`before no => ${this.state.no}`);
                let now = this.state.no +1;
                this.setState({no : now});
                console.log(`after no => ${this.state.no}`);
                if(Math.round(childY.bottom) === Math.round(parentY.bottom)){
                    return;
                }else{
                    this.setNew();
                }
                
            }else{
                size = size + 10;
                ele.style.marginLeft = size + 'px';
            }
        }, 1000);
    }

    setNew(){
        let childEle = document.createElement('div');
        childEle.setAttribute('id', `child${this.state.no}`);
        childEle.setAttribute('class', 'child');
        document.getElementById('parent').appendChild(childEle);
        this.move();
    }

    render() {
        return(
            <div>
            <p><button onClick={this.move.bind(this)}>Click to move..</button></p>

            <div id="parent" className="parent">
            <div id="child1" className="child"></div>
            </div>
            </div>
        );
    }
}