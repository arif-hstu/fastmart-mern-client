import React from 'react'
import './Admin.css'
import Sidebar from '../Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'
import AddEvent from '../AddEvent/AddEvent';
function Admin() {
	return (
		<div className='Admin'>
			<div className='SidebarHolder'>
				<Sidebar />
			</div>
			<div className='DashboardHolder'>
				<Dashboard />
			</div>
		</div>
	)
}

export default Admin; //to App