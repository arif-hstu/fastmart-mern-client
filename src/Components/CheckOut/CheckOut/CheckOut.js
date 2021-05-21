import React, { useState, useEffect, useContext } from 'react';
import { CartContext, UserContext } from '../../../App';
import './CheckOut.css';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartItems from '../CartItems/CartItems';
import Header from '../../Home/Header/Header';
import axios from 'axios';

function CheckOut() {
	let tempProductList = [];

	// consume context from App
	const [cart, setCart] = useContext(CartContext);
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);


	// process products list 
	// after getting from databse
	const [fetchedProducts, setFetchedProducts] = useState([]);
	const [selectedAllProducts, setSelectedAllProducts] = useState([]);

	useEffect(() => {
		const cartData = {
			cartData: cart
		}
		fetch('https://fastmart.herokuapp.com/findProducts', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(cartData)
		})
			.then(res => res.json())
			.then(data => {
				setFetchedProducts(data);
			})
	}, []);

	useEffect(() => {
		// debugger;
		fetchedProducts.map(pd => {
			const countOfProduct = cart.filter(cartId => cartId === pd._id);
			const newSelectedProduct = { ...pd };
			newSelectedProduct.pdCount = countOfProduct.length;

			tempProductList.push(newSelectedProduct);
		})

		setSelectedAllProducts(tempProductList);
	}, [fetchedProducts]);

	return (
		<>
			<Header />
			<div className='CheckOut'>
				<CartItems selectedAllProducts={[selectedAllProducts, setSelectedAllProducts]}/>
				<OrderSummary selectedAllProducts={selectedAllProducts}/>
			</div>
		</>
	)
}

export default CheckOut; //to App