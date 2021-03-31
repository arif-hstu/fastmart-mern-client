import React from 'react'
import './Dashboard.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import AddEvent from '../AddEvent/AddEvent'
import ProductList from '../ProductList/ProductList'

function Dashboard({ adminDestination }) {

	return (
		<div className='Dashboard'>
			<DashboardHeader />
			{
				adminDestination === 'addProduct' && <AddEvent />
			}
			{
				adminDestination === 'productList' && <ProductList />
			}
		</div>
	)
}

export default Dashboard;