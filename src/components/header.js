import React from 'react';
import ReactDom from 'react-dom';
import header from '../css/header.scss';


export default class Header extends React.Component {
    // constructor(){
    //     super();
    // }

    render(){
        return(   
            <header id="header">                    
            <div className="container d-flex align-items-center">
                <div class="logo mr-auto">
                <h1 class="text-light"><a href="index.html">React Sample APP<span>.</span></a></h1>                
                </div>
        
              <nav class="nav-menu d-none d-lg-block">
                <ul>
                  <li class="active"><a href="index.html">Home</a></li>
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#team">Team</a></li>
                  <li class="drop-down"><a href="">Drop Down</a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li class="drop-down"><a href="#">Drop Down 2</a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                      <li><a href="#">Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#contact">Contact Us</a></li>
        
                  <li class="get-started"><a href="#about">Get Started</a></li>
                </ul>
              </nav>
          </div>
           </header>
        );
    }    
}