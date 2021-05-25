import React, { useState } from 'react';

import Brand from '../Brand/Brand';
import logoMaecenas from '../../../resources/brandLogos/logoMaecenas.png';
import logoPrism from '../../../resources/brandLogos/logoPrism.png';
import logoSeam from '../../../resources/brandLogos/logoSeam.png';
import logoOgilvy from '../../../resources/brandLogos/logoOgilvy.png';
import './Brands.css';

function Brands() {
	const [logos, setLogos] = useState({allLogos: [logoMaecenas, logoPrism, logoSeam, logoOgilvy]});
	console.log(logos)
	return (
		<div className='Brands'>
			<h4 className='subtitle'>Shop by Brand</h4>
			<div className="brandHolder">
				{
					logos.allLogos.map(logo => <Brand logo={ logo} />)
				}
			</div>
		</div>
	)
}

export default Brands;