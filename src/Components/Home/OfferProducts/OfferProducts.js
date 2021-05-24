import React, { useState } from 'react';
import './OfferProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function OfferProducts({ allProducts }) {
	
	return (
		<div className='OfferProducts'>
			<InfoCard title={'Offers for You'}/>
			<ProductCard pd={allProducts[1]}/>
			<ProductCard pd={allProducts[2]}/>
			<ProductCard pd={allProducts[3]}/>
			<ProductCard pd={allProducts[6]}/>
		</div>
	)
}

export default OfferProducts; //to Home
