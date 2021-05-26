import React, { useState, useEffect } from 'react';

import './ReviewCard.css';
import iconStar from '../../../resources/icons/iconStar.svg';
import iconStarHighlight from '../../../resources/icons/iconStarHighlight.svg';
function ReviewCard({ reivewData }) {
	const [stars, setStars] = useState([]);
	let starArray = [];
	for(let i = 0; i < reivewData.rating; i++){
		starArray.push(iconStarHighlight);
	}
	for(let i = 0; i < (5-reivewData.rating); i++){
		starArray.push(iconStar);
	}
	useEffect(() => {
		setStars(starArray);
	}, []);
	return (
		<div className='ReviewCard'>
			<img src={reivewData.img} alt="Avatar" />
			<div className="reviewHolder">
				<p>{reivewData.review}</p>
			</div>
			<div className="ratingHolder">
				{
					stars.length && 
					stars.map(star=> <img src={star} alt="Star" />)
				}
			</div>
			<h4>{reivewData.name}</h4>
			<h6>{reivewData.designation}</h6>
		</div>
	)
}

export default ReviewCard; // cardholder