import React from 'react'
import './Dashboard.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import AddEvent from '../AddEvent/AddEvent'

function Dashboard() {
	return (
		<div className='Dashboard'>
			<DashboardHeader />
			<AddEvent />
		</div>
	)
}

export default Dashboard;