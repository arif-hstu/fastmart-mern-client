import React from 'react';

import './InfoCard.css';

function InfoCard({title}) {
    return (
        <div className='InfoCard'>
            <h2 className='cardTitle'>
            	{ title }
            </h2>
            <button className='primaryBtn'>
            	View More 
            </button>
        </div>
    );
}

export default InfoCard;