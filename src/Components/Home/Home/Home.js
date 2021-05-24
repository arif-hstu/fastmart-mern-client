import React, { useEffect, useState } from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import LatestProducts from '../LatestProducts/LatestProducts';
import DealsProducts from '../DealsProducts/DealsProducts';
import FakeHomeCard from '../FakeHomeCard/FakeHomeCard';
import OfferProducts from '../OfferProducts/OfferProducts';
import Categories from '../Categories/Categories';
import KitchenProducts from '../KitchenProducts/KitchenProducts';
import BooksProducts from '../BooksProducts/BooksProducts';
import OfferBanner from '../OfferBanner/OfferBanner';
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
					<>
						<LatestProducts allProducts={allProducts} />
						<DealsProducts allProducts={allProducts}/>
						<OfferProducts allProducts={allProducts}/>
						<KitchenProducts allProducts={allProducts}/>
						<BooksProducts allProducts={allProducts}/>
						<OfferBanner allProducts={allProducts}/>
						<Categories />
					</>
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