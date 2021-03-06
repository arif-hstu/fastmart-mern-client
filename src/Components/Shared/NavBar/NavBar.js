import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function NavBar() {
	return (
		<div className='NavBar'>
			<Link><span>SEARCH BY CATEGORY</span>
				<ArrowForwardIcon style={{ color: 'black' }} />
			</Link>
			<Link>Electronics
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Books
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Home
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Man
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Woman
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Kids
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
			<Link>Beauty
				<ArrowDropDownIcon style={{ color: 'black' }} />
			</Link>
		</div>
	)
}

export default NavBar; //to header