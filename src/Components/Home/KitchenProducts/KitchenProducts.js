import React, { useState } from 'react';
import './KitchenProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function KitchenProducts({ allProducts }) {
	
	return (
		<div className='KitchenProducts'>
			<InfoCard title={'Kitchen Appliances'}/>
			<ProductCard pd={allProducts[3]}/>
			<ProductCard pd={allProducts[2]}/>
			<ProductCard pd={allProducts[6]}/>
			<ProductCard pd={allProducts[5]}/>
		</div>
	)
}

export default KitchenProducts; //to Home
