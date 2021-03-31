import React from 'react';
import './SearchBar.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';


function SearchBar() {
	return (
		<div className='SearchBar'>
			<img src={logo} alt="" />
			<input type="button" value="" />
			<Link><FavoriteIcon style={{color:'white'}}/></Link>
			<Link><ShoppingCartIcon style={{color:'white'}} /></Link>
			<Link><PermIdentityIcon style= {{color: 'white'}} /><span className="loginInfo">Login</span></Link>
		</div>
	)
}

export default SearchBar; // to header