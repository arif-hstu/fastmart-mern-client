import React, { useState } from 'react';
import './DealsProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function DealsProducts({ allProducts }) {
	
	return (
		<div className='DealsProducts'>
			<InfoCard title={'Deals of the Day'}/>
			<ProductCard pd={allProducts[4]}/>
			<ProductCard pd={allProducts[5]}/>
			<ProductCard pd={allProducts[6]}/>
			<ProductCard pd={allProducts[0]}/>
		</div>
	)
}

export default DealsProducts; //to Home
