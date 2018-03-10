import React from 'react';

import './skills.scss';

const Skills = () => {
    return (
        <div id='skills' className='component-contaniner skills text-center'>
        <h1 className='text-left'>SKILLS</h1>
            <div><h2>Core</h2> </div>
            <ul className='list-inline list-icons'>
                <li className="list-inline-item">
                    <i className="devicon-html5-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-javascript-plain colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-jquery-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-angularjs-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-react-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-babel-plain colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-typescript-plain colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-jasmine-plain-wordmark colored"></i>
                </li>
            </ul>
            <ul className='list-inline list-icons'>
                <li className="list-inline-item">
                    <i className="devicon-css3-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-sass-plain colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-bootstrap-plain-wordmark colored"></i>
                </li>
            </ul>
            <hr />
            <div><h2>Build</h2> </div>
            <ul className='list-inline list-icons'>
                <li className="list-inline-item">
                    <i className="devicon-grunt-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-webpack-plain-wordmark colored"></i>
                </li>
            </ul>
            <hr />
            <div><h2> Version control</h2> </div>
            <ul className='list-inline list-icons'>
                <li className="list-inline-item">
                    <i className="devicon-git-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-bitbucket-plain-wordmark colored"></i>
                </li>
            </ul>
            <hr />
            <div><h2>IDEs</h2> </div>
            <ul className='list-inline list-icons'>
                <li className="list-inline-item">
                    <i className="devicon-intellij-plain-wordmark colored"></i>
                </li>
                <li className="list-inline-item">
                    <i className="devicon-visualstudio-plain-wordmark colored"></i>
                </li>
            </ul>
        </div >
    );
}

export default Skills;