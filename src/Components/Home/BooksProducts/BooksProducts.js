import React, { useState } from 'react';
import './BooksProducts.css';
import ProductCard from '../ProductCard/ProductCard';
import InfoCard from '../InfoCard/InfoCard';

function BooksProducts({ allProducts }) {
	
	return (
		<div className='BooksProducts'>
			<InfoCard title={'Books & Magazine'}/>
			<ProductCard pd={allProducts[0]}/>
			<ProductCard pd={allProducts[1]}/>
			<ProductCard pd={allProducts[2]}/>
			<ProductCard pd={allProducts[3]}/>
		</div>
	)
}

export default BooksProducts; //to Home
