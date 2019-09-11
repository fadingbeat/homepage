import React, { Component } from 'react';
import logo from '../images/logo.png';
import '../styles/MainCSS.css';
import '../styles/Header.css';
class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="item container-header">
         <h1 className="logo-text">Amadel's<span>photography</span></h1>
        </div>
        <div className="item container-navigation">
             <ul>
             <li>About</li>
             <li>Tips</li>
             <li>God's Image</li>
             </ul>
        </div>
        <div className="item container-logo">
         <img 
           src={logo} 
           id="logo" 
           alt="Root chakra symbol in red color" 
          />
        </div>
      </div>
    );
  }
}
export default Header;