import React from 'react';

import Discount from '../Discount/Discount';
import './Discounts.css';
function Discounts() {
	return (
		<div className='Discounts'>
			<h4 className='subtitle'>Shop by Discount</h4>
			<div className="discountHolder">
				<Discount percentage={'40%'}/>
				<Discount percentage={'50%'}/>
				<Discount percentage={'60%'}/>
				<Discount percentage={'80%'}/>
			</div>
		</div>
	)
}

export default Discounts;