import React, { Component } from "react";
import ReactDOM from "react-dom";

import NavBar from "./components/nav/NavBar";

import '../../public/assets/bootstrap/css/bootstrap.min.css';
import './app.scss'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='app-container'>
                <NavBar />
                <div className='jumbotron text-center'>
                    <h1>Pranita Naik</h1>
                </div>
            </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));
