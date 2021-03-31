import React from 'react'
import './Dashboard.css'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import AddProduct from '../AddProduct/AddProduct'
import ProductList from '../ProductList/ProductList'

function Dashboard({ adminDestination }) {

	return (
		<div className='Dashboard'>
			<DashboardHeader />
			{
				adminDestination === 'addProduct' && <AddProduct />
			}
			{
				adminDestination === 'productList' && <ProductList />
			}
		</div>
	)
}

export default Dashboard;