import React, { useContext } from 'react';
import './SearchBar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


function SearchBar() {
	//handle cart status using CartContext from App
	const [cart, setCart] = useContext(CartContext);

	return (
		<div className='SearchBar'>
			<img src={logo} alt="" />
			<input type="button" value="" />
			<Link><FavoriteBorderOutlinedIcon style={{ color: 'white' }} /></Link>
			<div className="cartIcon">
				<Link><ShoppingCartOutlinedIcon style={{ color: 'white' }} /></Link>
				<p className="cartCounter">
					{cart.length}
				</p>
			</div>
			<Link><PermIdentityIcon style={{ color: 'white' }} /><span className="loginInfo">Login</span></Link>
		</div>
	)
}

export default SearchBar; // to header