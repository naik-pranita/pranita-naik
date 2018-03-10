import React from 'react';
import './about.scss';

const About = ({ details }) => {
    const { name, contact, summary } = details;
    return (
        <div id='about' className='component-contaniner about text-center'>
            <h1 className='name'>{name}</h1>
            <div className='contact-details'>
                {contact.address}
                |
                {contact.phone}
                |
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
            <div className='summary text-justify'>
                <p>{summary}</p>
            </div>
            <div className='social text-left'>
                <ul>
                    <li>
                        <a href={contact.linkedIn} target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-linkedin fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={contact.github} target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-github fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={contact.twitter} target='_blank'>
                            <div className='circle'>
                                <i className="fa fa-twitter fa-inverse"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href={contact.facebook} target='_blank'>
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
