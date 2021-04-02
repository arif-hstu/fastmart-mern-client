import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './FakeCard.css';


function FakeCard() {
	return (
		<div className='FakeCard'>
			<Skeleton height={100} />
			<p></p>
			<Skeleton width={30} height={10} />
			<p></p>
			<Skeleton width={70} height={15} />
			<p></p>
			<Skeleton width={30} height={15} /> <b> </b>
			<Skeleton width={30} height={15} />
		</div>
	)
}

export default FakeCard;