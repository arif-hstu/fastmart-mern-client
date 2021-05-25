import React, { useState } from 'react';
import './Reviews.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import InfoCard from '../InfoCard/InfoCard';

function Reviews({ allProducts }) {
	
	return (
		<div className='Reviews'>
			<InfoCard title={'What Clients Says'}/>
			<ReviewCard pd={allProducts[4]}/>
			<ReviewCard pd={allProducts[5]}/>
		</div>
	)
}

export default Reviews; //to Home
