import React, { useEffect, useContext, useState } from 'react';
import './TrackOrder.css';
import Header from '../Header/Header';
import { UserContext } from '../../App'
import IndividualOrder from '../IndividualOrder/IndividualOrder'

function TrackOrder() {
	//consume userContext data
	const [loggedInUser, seLoggedInUser] = useContext(UserContext);
	const [orders, setOrders] = useState([]);


	// get order data from the database
	useEffect(() => {
		fetch('http://localhost:5000/trackOrder', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(loggedInUser)
		})
			.then(res => res.json())
			.then(data => {
				setOrders(data);
			});

	}, [])

	console.log(orders, 'from trackOrder')

	return (
		<>
			<Header />
			<div className='TrackOrder'>
				<div className="TrackOrderTitle">
					<h3>TRACK YOUR ORDER</h3>
					<h3>{loggedInUser.displayName}</h3>
				</div>
				<div className="headline">
					<p>#</p>
					<p>Order ID</p>
					<p>Buyer Name</p>
					<p>Email</p>
					<p>Address</p>
					<p>Date</p>
					<p>Total Cost</p>
				</div>
				{
					orders.length > 0 &&
					orders.map(ord => <IndividualOrder order={ord} />)
				}
			</div>

		</>
	)
}

export default TrackOrder; //to TrackOrder