import React from 'react';

import './OfferBanner.css';
import bannerSpring from '../../../resources/images/banner/bannerSpring.png';
import bannerWashing from '../../../resources/images/banner/bannerWashing.png';
import bannerCasual from '../../../resources/images/banner/bannerCasual.png';

function OfferBanner() {
	return (
		<div className='OfferBanner'>
			<div className="firstBanner">
				<img src={bannerSpring} alt="Spring Offer" />
			</div>
			<div className="secondBanner">
				<img src={bannerWashing} alt="Washing Machine" />
			</div> 
			<div className="thirdBanner">
				<img src={bannerCasual} alt="Casual Shoes" />
			</div> 
		</div>
	)
}

export default OfferBanner;