import React, { useContext } from 'react';
import './SearchBar.css';
import logo from '../../../resources/icons/logo.png';
import { Link } from 'react-router-dom'
import { CartContext, UserContext } from '../../../App'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


function SearchBar() {
	//handle cart status using CartContext from App
	const [cart, setCart] = useContext(CartContext);
	const [loggedInUser, setLoggeddInUser] = useContext(UserContext);

	return (
		<div className='SearchBar'>
			<Link to='/'>
				<img src={logo} alt="FastMart" />
			</Link>
			<input type="button" value="" />
			<Link><FavoriteBorderOutlinedIcon style={{ color: 'white' }} /></Link>
			<div className="cartIcon">
				<Link to='/checkout'><ShoppingCartOutlinedIcon style={{ color: 'white' }} /></Link>
				<p className="cartCounter">
					{cart.length}
				</p>
			</div>
			<Link to='/login'><PermIdentityIcon style={{ color: 'white' }} /></Link>
			<Link to="/admin/productList">Admin</Link>
		</div>
	)
}

export default SearchBar; // to Header