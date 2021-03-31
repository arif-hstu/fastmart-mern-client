import React from 'react'
import './TopBar.css'
import PhoneIcon from '@material-ui/icons/Phone';
import bdFlag from '../../images/bdFlag.ico';
import usFlag from '../../images/usFlag.ico';
import { Link } from 'react-router-dom';

function TopBar() {
	return (
		<div className='TopBar'>
			<Link>World's Fastest Online Shoppins Hub</Link>
			<Link><PhoneIcon/>Hotline 01710111111</Link>
			<Link>Advertise</Link>
			<Link>Gift Card</Link>
			<Link>Todays Deal</Link>
			<Link>Help</Link>
			<Link>Store Location</Link>
			<Link>Track Your Order</Link>
			<Link><img src={usFlag} alt="English" /> English</Link>
		</div>
	)
}

export default TopBar; // to Header