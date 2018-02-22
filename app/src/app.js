import React, { Component } from "react";
import ReactDOM from "react-dom";

import '../../public/assets/bootstrap/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='jumbotron text-center'>
                <h1>Pranita Naik</h1>
            </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));