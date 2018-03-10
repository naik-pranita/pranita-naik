import React from 'react';
import './card.scss';

const mapComponentDetails = (item, index) => {
    return (
        <div key={index} className='card-container'>
            <div className='heading'>
                {item.heading}
            </div>
            <div className='sub-heading'>
                {item.subHeading}
            </div>
            <div className='card-body'>
                {item.mainContent.map((content, idx) => <p key={idx}>{content}</p>)}
            </div>
            <div className='card-footer'>
                {item.footer}
            </div>
            <hr />
        </div>
    );
};


const Card = ({item}) => {
    return (
        <div id={item.section} className='component-contaniner card'>
            <div className='card-title'>
                <h1>{item.section}</h1>
            </div>
            <div>
                {item.content.map(mapComponentDetails)}
            </div>
        </div>

    )
};

export default Card;
