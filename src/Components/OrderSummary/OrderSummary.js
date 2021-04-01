import React from 'react';
import Select from 'react-select';
import './OrderSummary.css';


const locations = [
    { label: 'Dhaka', value: '23.777176 90.399452' },
    { label: 'Chittagong', value: '22.341900, 91.815536' },
    { label: 'Sylhet', value: '24.886436 91.880722' },
    { label: 'Rangpur', value: '25.74664 89.25166' },
    { label: 'Jessore', value: '23.16971 89.21371' },
    { label: 'Bogura', value: '24.8510 89.3711' },
];


const selectLocation = (value) =>  {
	console.log(value)
}


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
				<h5>&462</h5>
			</div>
			<button className='btn'>CHECKOUT</button>
		</div>
	)
}

export default OrderSummary