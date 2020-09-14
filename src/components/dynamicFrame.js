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
        let customId = `child${this.state.no}`;
        var ele = document.getElementById(customId); 
        var parentDom = document.getElementById('parent');
        let size = 10;
        ele.style.marginLeft = size + 'px';
        let childPosition = ele.getBoundingClientRect();
        let parentPosition = parentDom.getBoundingClientRect();
        
        let run = setInterval(() => {
            if(size === 380){
                clearInterval(run);
                let now = this.state.no +1;
                this.setState({no : now});
                if(Math.round(childPosition.bottom) === Math.round(parentPosition.bottom)){
                    return;
                }else{
                    this.setNew();
                }
                
            }else{
                size = size + 10;
                ele.style.marginLeft = size + 'px';
                // console.log(childPosition.x);
                // console.log(childPosition.y);
                // childPosition.x = childPosition.x + 5;
                // childPosition.y = childPosition.y + 5;
                // console.log(childPosition.x);
                // console.log(childPosition.y);
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

       function testDefaultBehaviour(e) {
            e.printDefault();
            console.log('test default behaviour')
        }

        return(
            <div>
            <p><button onClick={this.move.bind(this)}>Click to move..</button></p>
            <p><a href="#" onClick={testDefaultBehaviour}>default behaviour</a></p>

            <div id="parent" className="parent">
            <div id="child1" className="child"></div>
            </div>
            </div>
        );
    }
}