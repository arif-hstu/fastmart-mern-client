import React from 'react';
import './CheckOut.css';
import OrderSummary from '../OrderSummary/OrderSummary';
import CartItems from '../CartItems/CartItems';
import Header from '../Header/Header';

function CheckOut() {
	return (
		<>
			<Header />
			<div className='CheckOut'>
				<CartItems />
				<OrderSummary />
			</div>
		</>
	)
}

export default CheckOut; //to App