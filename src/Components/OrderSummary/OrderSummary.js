import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './OrderSummary.css';
import PlaceOrder from '../PlaceOrder/PlaceOrder';


const locations = [
	{ label: 'Home Delivery (in Dhaka)', value: 'homeDhaka' },
	{ label: 'Home Delivery (Outside)', value: 'outside' },
	{ label: 'Cash-on-Delivery', value: 'cashOnDelivery' },
	{ label: 'Free Shpping (Condition Applied)', value: 'freeShipping' }
];


const selectLocation = (value) => {
	console.log(value)
}

let tempTotalPrice = 0;
function OrderSummary({ selectedAllProducts }) {
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		selectedAllProducts.map(pd => {
			return tempTotalPrice += pd.pdPrice * pd.pdCount;
		});
		setTotalPrice(tempTotalPrice);

	}, [selectedAllProducts])

	return (
		<div className='OrderSummary'>
			<div className="heading">
				<h5>ORDER SUMMARY</h5>
			</div>
			<div className="items">
				<h5>ITEMS</h5>
				<h5>{selectedAllProducts.length}</h5>
			</div>
			<div className="name">
				<h5>Your Name</h5>
				<input type="text" placeholder='Your name'/>
			</div>
			<div className="address">
				<h5>Address</h5>
				<input type="text" placeholder='Your Address' />
			</div>
			<div className="phone">
				<h5>Phone Number</h5>
				<input type="text" placeholder='Your Phone Number' />
			</div>
			<div className="shipping">
				<h5>SHIPPING</h5>
				<Select
					options={locations}
					onChange={selectLocation}
				/>
			</div>
			<div className="promoCode">
				<h5>PROMO CODE</h5>
				<input type="text" />
				<button>APPLY</button>
			</div>
			<div className="total">
				<h5>TOTAL COST</h5>
				<h5>৳{totalPrice}</h5>
			</div>
			<PlaceOrder totalPrice = {totalPrice} selectedAllProducts={selectedAllProducts} />
		</div>
	)
}

export default OrderSummary; // to Checkout