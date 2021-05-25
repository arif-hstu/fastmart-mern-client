import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LocationContext } from '../../../App';
import fakeData from './fakeCategories';
import './CategoryDetails.css';
import bannerSunglassEmpty from '../../../resources/images/banner/bannerSunglassEmpty.png';
import bannerSuitcase from '../../../resources/images/banner/bannerSuitcase.png';
import bannerSports from '../../../resources/images/banner/bannerSports.png';

function CategoryDetails() {
	const [location, setLocation] = useContext(LocationContext);
	
	useEffect(() => {

	}, [location])

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className='CategoryDetails'>
			<div className="firstPart">
				<img src={bannerSunglassEmpty} alt="Spring" />
				<div className="detailsHolder">
					<div className="items">
						<div className="itemTitle">
							<h3 style={{ textAlign: 'left' }} className='cardTitle'>Get Your <br />{capitalizeFirstLetter(location)} Items </h3>
						</div>
						<div className="itemList">
							<ul>
								{
									fakeData.fitnessCategories.map(data => <li className='listItems'>{data}</li>)
								}
							</ul>
						</div>
					</div>
					<div className="bannerInfo">
						<h5 className='bannerSubtitle'>TOP BRANDS</h5>
						<h2 className='bannerTitle'>{capitalizeFirstLetter(location).toUpperCase()} ITEMS</h2>
						<p className='small'>Buy Top Brands {capitalizeFirstLetter(location)} Items from FastMart</p>
					</div> 
				</div>
			</div>
			<div className="secondPart">
				<div className="first">
					<img src={bannerSuitcase} alt="First Image" />
				</div>
				<div className="second">
					<img src={bannerSports} alt="Second Image" />
				</div>
			</div>
		</div>
	)
}

export default CategoryDetails;