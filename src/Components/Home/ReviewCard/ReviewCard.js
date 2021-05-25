import React, { useState, useEffect } from 'react';

import './ReviewCard.css';
import fakeReviewData from './fakeReviewData';

function ReviewCard({ pd }) {
	const [reivewData, setReviewData] = useState([]);
	useEffect(() => {
		setReviewData(fakeReviewData);
	}, [])

	return (
		<div className='ReviewCard'>
		</div>
	)
}

export default ReviewCard; // cardholder