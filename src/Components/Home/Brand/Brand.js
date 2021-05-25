import React from 'react';

import './Brand.css';
function Brand(props) {
	return (
		<div className='Brand'>
			<img src={props.logo} alt="Logos" />
		</div>
	)
}

export default Brand;