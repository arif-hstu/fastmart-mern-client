import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import CardHolder from '../CardHolder/CardHolder';
import FakeHomeCard from '../FakeHomeCard/FakeHomeCard';
import axios from 'axios'

function Home() {
	// useState to hold the allProducts
	const [allProducts, setAllProducts] = useState([]);
	
	// fetch products by api
	useEffect(() => {
		axios('https://fastmart.herokuapp.com/allProducts')
			.then(data => setAllProducts(data.data));
	}, []);

	return (
		<div className='Home'>
			<Header />
			<div className='bannerCards'>
				<Banner />
				{
					allProducts.length > 0 &&
					<CardHolder allProducts={allProducts} />
				}

				{
					allProducts.length === 0 && 
					<FakeHomeCard />
				}
			</div>
		</div>
	)
}

export default Home