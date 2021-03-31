import React from 'react'
import './TopBar.css'
import PhoneIcon from '@material-ui/icons/Phone';
import bdFlag from '../../images/bdFlag.ico';
import usFlag from '../../images/usFlag.ico';
import { Link } from 'react-router-dom';

function TopBar() {
	return (
		<div className='TopBar'>
			<div className="firstPart">
				<Link>Fastest Online Shoppins Hub</Link>
				<Link><PhoneIcon /><span>Hotline 01710111111</span></Link>
			</div>
			<div className="lastPart">
				<Link>Gift Card</Link>
				<Link>Todays Deal</Link>
				<Link>Help</Link>
				<Link>Store Location</Link>
				<Link>Track Your Order</Link>
				<Link><img src={usFlag} alt="English" /> <span>English</span></Link>
				<Link to="/admin/addProduct">Admin</Link>
			</div>

		</div>
	)
}

export default TopBar; // to Header