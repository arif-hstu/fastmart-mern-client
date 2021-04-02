import React, { useContext } from 'react'
import './DashboardHeader.css'
import { UserContext } from '../../App'

function DashboardHeader() {

	// consume context from app
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	return (
		<div className='DashboardHeader'>
			<h3>Admin Dashboard</h3>
			<h4>Admin: {loggedInUser && loggedInUser.displayName}</h4>
		</div>
	)
}

export default DashboardHeader;