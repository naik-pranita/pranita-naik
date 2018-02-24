import React from 'react';
import './card.scss';

const Card = (props) => {
    return (
        <div className='component-contaniner card'>
            <div className='card-title'>
                {props.title}
            </div>
            <div className='heading'>
                {props.heading}
            </div>
            <div className='sub-heading'>
                {props.subHeading}
            </div>
            <div className='card-body'>
                <p>{props.mainContent}</p>
            </div>
            <div className='card-footer'>
                {props.footer}
            </div>
        </div>
    )

}

export default Card;
