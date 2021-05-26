import React from 'react';

import './ReviewCard.css';
function ReviewCard({ reivewData }) {
	return (
		<div className='ReviewCard'>
			<img src={reivewData.img} alt="Avatar" />
			<div className="reviewHolder">
				<p>{reivewData.review}</p>
			</div>
			<h4>{reivewData.name}</h4>
			<h6>{reivewData.designation}</h6>
		</div>
	)
}

export default ReviewCard; // cardholder