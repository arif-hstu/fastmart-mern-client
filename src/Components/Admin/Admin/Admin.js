import React from 'react'
import { useParams } from 'react-router-dom'
import './Admin.css'
import Sidebar from '../../Shared/Sidebar/Sidebar'
import Dashboard from '../../Shared/Dashboard/Dashboard'
function Admin() {
	// useParams for finding destination
	const { adminDestination } = useParams();
	return (
		<div className='Admin'>
			<div className='SidebarHolder'>
				<Sidebar />
			</div>
			<div className='DashboardHolder'>
				<Dashboard adminDestination = {adminDestination}/>
			</div>
		</div>
	)
}

export default Admin; //to App