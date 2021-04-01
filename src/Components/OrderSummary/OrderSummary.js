import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App'
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

let tempTotalPrice = 0; //for counting total price

function OrderSummary({ selectedAllProducts }) {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const [error, setError] = useState('');
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		selectedAllProducts.map(pd => {
			return tempTotalPrice += pd.pdPrice * pd.pdCount;
		});
		setTotalPrice(tempTotalPrice);

	}, [selectedAllProducts]);


	// hanlde input data
	// process input data
	const handleInputText = (e) => {
		let valid = false;

		// add date to the user info state
		const newDate = new Date();
		const newUserInfo = {...loggedInUser};
		newUserInfo.date = newDate;
		setLoggedInUser(newUserInfo);

		// if input is product name
		if (e.target.name === 'address') {
			const stringRegex = /[a-zA-Z]/;
			valid = stringRegex.test(e.target.value)

			if (valid) {
				const newUserInfo = { ...loggedInUser };
				newUserInfo[e.target.name] = e.target.value;
				setLoggedInUser(newUserInfo);

				valid = false;
			} else {
				const newUserInfo = { ...loggedInUser };
				delete newUserInfo[e.target.name];
				setLoggedInUser(newUserInfo);

				setError({
					error: e.target.name
				});
			}
		}

		// if input is phone number 
		if (e.target.name === 'phone') {
			const numberRegex = /^[0-9]+$/;
			valid = numberRegex.test(e.target.value);

			if (valid) {
				const newUserInfo = { ...loggedInUser };
				newUserInfo[e.target.name] = e.target.value;
				setLoggedInUser(newUserInfo);

				valid = false;
			} else {
				const newUserInfo = { ...loggedInUser };
				delete newUserInfo[e.target.name];
				setLoggedInUser(newUserInfo);

				setError({
					error: e.target.name
				});
			}
		}
	}

	// handleCheckOut
	const handleCheckOut = () => {
		console.log('you clicked me;')
	}

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
				<input value={loggedInUser.displayName} type="text" placeholder='Your name' />
			</div>
			<div className="address">
				<h5>Address</h5>
				<input onBlur={handleInputText} type="text" name='address' placeholder='Your Address' />
			</div>
			<div className="phone">
				<h5>Phone Number</h5>
				<input onBlur={handleInputText} type="text" name='phone' placeholder='Your Phone Number' />
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
			{
				loggedInUser.displayName &&
				loggedInUser.email &&
				loggedInUser.address &&
				loggedInUser.phone &&
				<PlaceOrder totalPrice={totalPrice} selectedAllProducts={selectedAllProducts} /> ||
				<button>Add Valid info to CheckOut</button>
			}
		</div>
	)
}

export default OrderSummary; // to Checkout