import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Card from "./components/card/Card";

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
                <hr />
                <Card
                     title='Experience'
                     heading='Web Developer'
                     subHeading='Barclaycard US'
                     mainContent='test content test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content  test content '
                     footer='July 2016 - present'
                     />
            </div>
        )
    }
};


ReactDOM.render(<App />, document.getElementById('app'));
