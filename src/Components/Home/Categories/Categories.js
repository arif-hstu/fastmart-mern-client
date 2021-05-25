import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';


import { LocationContext } from '../../../App';
import './Categories.css';
import iconBooks from '../../../resources/icons/iconBook.svg';
import bookHighlight from '../../../resources/icons/iconBookHighlight.svg';
import iconFurniture from '../../../resources/icons/iconFurniture.svg';
import furnitureHighlight from '../../../resources/icons/iconFurnitureHighlight.svg';
import iconFitness from '../../../resources/icons/iconFitness.svg';
import fitnessHighlight from '../../../resources/icons/iconFitnessHighlight.svg';
import iconMore from '../../../resources/icons/iconMore.svg';
import moreHighlight from '../../../resources/icons/iconMoreHighlight.svg';
import iconSports from '../../../resources/icons/iconSports.svg';
import sportsHighlight from '../../../resources/icons/iconSportsHighlight.svg';
import iconElectronics from '../../../resources/icons/iconElectronics.svg';
import electronicsHighlight from '../../../resources/icons/iconElectronicsHighlight.svg';

function Categories() {
	const iconBookHighlight = bookHighlight;
	const iconFurnitureHighlight = furnitureHighlight;
	const iconFitnessHighlight = fitnessHighlight;
	const iconSportsHighlight = sportsHighlight;
	const iconElectronicsHighlight = electronicsHighlight;

	const [location, setLocation] = useContext(LocationContext);
	const history = useHistory();
	const [icon, setIcon] = useState({ fitness: iconFitnessHighlight});

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const changeIcon = (type) => {
		const capitalType = capitalizeFirstLetter(type);
		setIcon({
			[type]: eval(`icon${capitalType}Highlight`)
		});
		history.push(`/#${type}`);
		setLocation(type);
	}

	return (
		<div className='Categories'>
			<h4 className='subtitle'>Shop by Categories</h4>
			<div className="iconHolder">
				<div className="books" onClick={() => changeIcon('book')}>
					<img src={icon.book || iconBooks} alt="" />
					<h5 style={icon.book && {color: '#fa4f90'}}>Books</h5>
				</div>
				<div className="Electronics" onClick={() => changeIcon('electronics')}>
					<img src={icon.electronics || iconElectronics} alt="Book" />
					<h5 style={icon.electronics && {color: '#fa4f90'}}>Electronics</h5>
				</div>
				<div className="Fitness" onClick={() => changeIcon('fitness')}>
					<img src={icon.fitness || iconFitness} alt="Book" />
					<h5 style={icon.fitness && {color: '#fa4f90'}}>Fitness</h5>
				</div>
				<div className="Sports" onClick={() => changeIcon('sports')}>
					<img src={icon.sports || iconSports} alt="Sports" />
					<h5 style={icon.sports && {color: '#fa4f90'}}>Sports</h5>
				</div>
				<div className="Furniture" onClick={() => changeIcon('furniture')}>
					<img src={icon.furniture || iconFurniture} alt="Furniture" />
					<h5 style={icon.furniture && {color: '#fa4f90'}}>Furniture</h5>
				</div>
				<div className="More" onClick={() => history.push('/')}>
					<img src={iconMore} alt="Book" />
					<h5>More</h5>
				</div>
			</div>
		</div>
	)
}

export default Categories;
