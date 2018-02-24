import React from 'react';
import './about.scss';

const About = (props) => {
    return (
        <div className='overview text-center'>
            <h1 className='name'>PRANITA NAIK</h1>
            <div className='contact-details'>
                152/24, SHRI KUNJ, PRADHIKARAN, NIGDI, PUNE - 411044
                |
                +918087809466
                |
                <a href='mailto:pnaik93@gmail.com'> pnaik93@gmail.com</a>
            </div>
            <div className='summary text-justify'>
                <p>Passionate Web Developer.</p>
            </div>
            <div className='social text-left'>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/pranita-naik-30180a48/' target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-linkedin fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/pnaik93' target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-github fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-twitter fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-facebook fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default About;