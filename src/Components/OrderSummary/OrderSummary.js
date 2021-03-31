import React from 'react';
import './OrderSummary.css';

function OrderSummary() {
	return (
		<div className='OrderSummary'>
			<div className="heading">
				<h5>ORDER SUMMARY</h5>
			</div>
			<div className="items">
				<h5>ITEMS</h5>
				<h5>$457</h5>
			</div>
			<div className="shipping">
				<h5>SHIPPING</h5>
				<input type="text" />
			</div>
			<div className="promoCode">
				<h5>PROMO CODE</h5>
				<input type="text" />
				<button>APPLY</button>
			</div>
			<div className="total">
				<h5>TOTAL COST</h5>
				<h5>&462</h5>
			</div>
			<button className='btn'>CHECKOUT</button>
		</div>
	)
}

export default OrderSummary