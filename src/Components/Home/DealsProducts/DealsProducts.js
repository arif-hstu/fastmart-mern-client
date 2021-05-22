import React, { useState } from 'react';
import './DealsProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function DealsProducts({ allProducts }) {
	
	return (
		<div className='DealsProducts'>
			<InfoCard title={'Deals of the Day'}/>
			<ProductCard pd={allProducts[0]}/>
			<ProductCard pd={allProducts[1]}/>
			<ProductCard pd={allProducts[2]}/>
			<ProductCard pd={allProducts[3]}/>
		</div>
	)
}

export default DealsProducts; //to Home
