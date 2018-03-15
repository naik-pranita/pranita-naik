import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/nav/NavBar';
import About from './components/about/About';
import Card from './components/card/Card';
import Skills from './components/skills/Skills';

import data from './data';
import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about: data.about,
      experience: data.experience,
      skills: data.skills,
      education: data.education,
    }
  }

  render() {
    return (
      <div className='app-container'>
        <NavBar />
        <About details={this.state.about} />
        <Card item={this.state.experience} />
        <Skills details={this.state.skills} />
        <Card item={this.state.education} />

        <div id='interests' />
      </div>
    )
  }
};


ReactDOM.render(<App />, document.getElementById('app'));
