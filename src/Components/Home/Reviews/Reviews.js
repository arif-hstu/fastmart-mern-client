import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import InfoCard from '../InfoCard/InfoCard';
import fakeReviewData from './fakeReviewData';

function Reviews({ allProducts }) {
	const [reivewData, setReviewData] = useState([]);
	useEffect(() => {
		setReviewData(fakeReviewData);
	}, []);
	return (
		<div className='Reviews'>
			<InfoCard title={'What Clients Says'} />
			{
				reivewData.length &&
				<>
					<ReviewCard reivewData={reivewData[0]} />
					<ReviewCard reivewData={reivewData[1]} />
				</>
			}
		</div>
	)
}

export default Reviews; //to Home
