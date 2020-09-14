import Title from './Title';
import React from 'react';

export default class Header extends React.Component{
    handleChange(e){
        const title = e.target.value;
        this.props.changeTitle(title); 
    }
    render(){   
        console.log("render");          
        return(
            <div>
                <Title title={this.props.title}/>
                <input type="text" value={this.props.title} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}