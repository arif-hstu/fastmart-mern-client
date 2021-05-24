import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './CategoryDetails.css';

function CategoryDetails() {
	const history = useHistory();
	const [projectType, setProjectType] = useState('mern');
	const [underline, setUnderline] = useState(false);

	const filterType = (type) => {
		setProjectType(type);
		setUnderline(true);
	}

	const filterStyle = {
		borderBottom: '3px solid white'
	}

	const noFilterStyle = {
		borderBottom: 'none'
	}

	return (
		<div className=" CategoryDetails">
			<div className='titleHolder'>
				<h1>PORTFOLIO</h1>
				<h1>MY WORK TABLE</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="filterHolder">
				<Link style={projectType==='mern' && filterStyle || noFilterStyle} to='#mern' onClick={() => { filterType('mern') }} className="filter filter1"><span>MERN Stack</span></Link>
				<Link style={projectType==='react' && filterStyle || noFilterStyle} to='#react' onClick={() => { filterType('react') }} className="filter filter2">React App</Link>
				<Link style={projectType==='javascript' && filterStyle || noFilterStyle}  to='#javascript' onClick={() => { filterType('javascript') }} className="filter filter3">Javascript</Link>
				<Link style={projectType==='vue' && filterStyle || noFilterStyle}  to='#vue' onClick={() => { filterType('vue') }} className="filter filter4">Vue</Link>
			</div>

			<div className="projectHolder">
				{
					projectType === 'mern' &&
					<>
						mern
					</>
				}
				{
					projectType === 'react' &&
					<>
						react
					</>
				}
				{
					projectType === 'javascript' &&
					<>
					javascript
					</>
				}
			</div>
		</div>
	)
}

export default CategoryDetails;