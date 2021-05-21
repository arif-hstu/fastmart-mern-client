import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../../resources/icons/logo.png';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
function Sidebar() {

	// useparams to change the menu style
	const { adminDestination } = useParams();

	const [addStyle, setAddStyle] = useState({});
	const [listStyle, setListStyle] = useState({});

	useEffect(() => {
		if (adminDestination === 'addProduct') {
			setAddStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setListStyle({});
		} else {
			setListStyle({
				backgroundColor: '#2f216a',
				padding: '0.8rem 0 0.8rem 1rem'
			});
			setAddStyle({});
		}
	}, [adminDestination]);


	return (
		<div className='Sidebar'>
			<Link to='/'><img src={logo} alt="" /></Link>
			<div className="menu">
				<Link style={listStyle} to='/admin/productList' >
					<DashboardIcon style={{ color: 'white' }} /> Manage Products
				</Link>
				<Link style={addStyle}  to='/admin/addProduct'>
					<AddOutlinedIcon style={{ color: 'white' }} /> Add Product
				</Link>
			</div>
		</div>
	)
}

export default Sidebar; //to Admin