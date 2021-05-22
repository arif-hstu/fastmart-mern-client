import React, { useState } from 'react';
import './LatestProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function LatestProducts({ allProducts }) {
	
	return (
		<div className='LatestProducts'>
			<InfoCard title={'Latest Products'}/>
			<ProductCard pd={allProducts[0]}/>
			<ProductCard pd={allProducts[1]}/>
			<ProductCard pd={allProducts[2]}/>
			<ProductCard pd={allProducts[3]}/>
		</div>
	)
}

export default LatestProducts; //to Home
