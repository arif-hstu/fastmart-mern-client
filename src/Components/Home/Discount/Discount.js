import React from 'react';

import './Discount.css';
function Discount(props) {
	return (
		<div className='Discount'>
			<p>Upto</p>
			<h1>{props.percentage}</h1>
			<p>off</p>
		</div>
	)
}

export default Discount;