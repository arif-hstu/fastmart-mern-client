import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import logo from '../../images/logo.png'
function Sidebar() {
	return (
		<div className='Sidebar'>
			<Link to='/'><img src={logo} alt="" /></Link>
			<div className="menu">
				<Link to='/admin/dashboard'>Dashboard</Link>
				<Link to='/admin/userList'>User List</Link>
				<Link to='/admin/addEvent'>Add Event</Link>
			</div>
 		</div>
	)
}

export default Sidebar; //to Admin