import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/nav/NavBar";
import About from "./components/about/About";

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='app-container'>
                <NavBar />
                <About />
            </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));
