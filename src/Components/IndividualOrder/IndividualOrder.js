import React from 'react';
import './IndividualOrder.css'

function IndividualOrder({order}) {
	return (
		<div className='IndividualOrder'>
			<div className="items">
				<p>#</p>
				<p>{order.orderID}</p>
				<p>{order.displayName}</p>
				<p>{order.email}</p>
				<p>{order.address}</p>
				<p>{order.date}</p>
				<p>{order.totalCost}</p>
			</div>
		</div>
	)
}

export default IndividualOrder