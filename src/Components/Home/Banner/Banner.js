import React from 'react'
import './Banner.css'
import bannerWatch from '../../../resources/images/bannerWatch.png';

function Banner() {
	return (
		<div className='Banner'>
			<div className="imageHolder">
				<img src={bannerWatch} alt="Banner Watch" />
			</div>
			<div className="infoHolder">
				<h6>UP TO 60% OFF</h6>
				<p>
					<span className="highlight">						Man's Wathces
					</span>
				</p>
				<h4>WEEKEND</h4>
				<h3>SPECIAL SALE</h3>
				<button className="highlight">SHOP NOW</button>
			</div>
		</div>
	)
}

export default Banner