import React from 'react';

import './skills.scss';

const Skills = ({ details }) => {
    return (
        <div id='skills' className='component-contaniner skills text-center'>
            <h1 className='text-left text-uppercase'>{details.section}</h1>
            {details.content.map((section, idx) =>
                <div key={`${section.label}-${idx}`} className='wrapper'>
                    <div><h2>{section.label}</h2> </div>
                    <ul className='list-inline list-icons'>
                        {section.values.map((value, idx) => <li key={`${section.label}-list-item-${idx}`} className="list-inline-item"><i className={`devicon-${value} colored`} /></li>)}
                    </ul>
                    <hr />
                </div>
            )}
        </div >
    );
}

export default Skills;