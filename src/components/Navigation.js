import React, { Component } from 'react';
import logo from '../images/logo.png';

class Navigation extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1 className="col-3">Amadel's<span>photography</span></h1>
                    <img src={logo} id="logo" alt="Root chakra symbol in red color" />
                    <nav>
                        <ul>
                            <li>About</li>
                            <li>Tips</li>
                            <li>God's Image</li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navigation;