import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { LocationContext } from '../../../App';
import fakeData from './fakeCategories';
import './CategoryDetails.css';
import bannerSunglassEmpty from '../../../resources/images/banner/bannerSunglassEmpty.png';
import bannerSuitcase from '../../../resources/images/banner/bannerSuitcase.png';
import bannerSportsYellow from '../../../resources/images/banner/bannerSports.png';
import bannerSportsMain from '../../../resources/images/banner/bannerSportsMain.png';
import bannerBookMain from '../../../resources/images/banner/bannerBookMain.png';
import bannerFurnitureMain from '../../../resources/images/banner/bannerFurnitureMain.png';
import bannerWatchMain from '../../../resources/images/banner/bannerWatchMain.png';

function CategoryDetails() {
	const bannerBook = bannerBookMain;
	const bannerWatch = bannerWatchMain;
	const bannerSports = bannerSportsMain;
	const bannerFurniture = bannerFurnitureMain;
	const bannerSunglass = bannerSunglassEmpty;

	const [location, setLocation] = useContext(LocationContext);
	const [categoryBanner, setCategoryBanner] = useState(bannerSunglass);
	useEffect(() => {
		if (location === 'book') {
			setCategoryBanner(bannerBook);
		}
		if (location === 'electronics') {
			setCategoryBanner(bannerWatch);
		}
		if (location === 'fitness') {
			setCategoryBanner(bannerSunglass);
		}
		if (location === 'sports') {
			setCategoryBanner(bannerSports);
		}
		if (location === 'furniture') {
			setCategoryBanner(bannerFurniture);
		}
	}, [categoryBanner, location])

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className='CategoryDetails'>
			<div className="firstPart">
				<img src={categoryBanner} alt="Spring" />
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
						<button id='shopNowButton'>SHOP NOW</button>
					</div>
				</div>
			</div>
			<div className="secondPart">
				<div className="first">
					<img src={bannerSuitcase} alt="First Image" />
				</div>
				<div className="second">
					<img src={bannerSportsYellow} alt="Second Image" />
				</div>
			</div>
		</div>
	)
}

export default CategoryDetails;