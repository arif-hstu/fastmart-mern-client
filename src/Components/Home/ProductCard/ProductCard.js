import React, { useState, useContext } from 'react';
import { CartContext, UserContext } from '../../../App';
import './ProductCard.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function ProductCard({ pd }) {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	const previousStyle = {
		opacity: '1',
		// transition: '0.01s'
	}
	const alteredStyle = {
		transform: 'translateY(-100px) scale(1.5)',
		opacity: '0',
		transition: '1s'
	}
	const [animatedStyle, setAnimatedStyle] = useState(previousStyle);

	// handle cart
	const [cart, setCart] = useContext(CartContext);
	const addToCart = (e) => {
		e.preventDefault();

		if (e.target.parentNode.id || e.target.id) {
			setAnimatedStyle(alteredStyle);
			const newCart = [...cart, e.target.parentNode.id || e.target.id];
			setCart(newCart);

			// store cart array to the loggedInUser state
			const newUserInfo = { ...loggedInUser };
			newUserInfo.cart = newCart;
			setLoggedInUser(newUserInfo);
		}

		setTimeout(function() { setAnimatedStyle(previousStyle) }, 1000);
	}

	return (
		<div onClick={addToCart} id={pd._id} className='ProductCard'>
			<div id={pd._id} className="imageHolder">
				<img id={pd._id} src={pd.pdImage} alt="Product Image" />
			</div>
			<div className="infoHolder">
				<p id={pd._id}><small>{pd.pdCatagory}</small></p>
				<h5>{pd.pdName}</h5>
				<div className='priceCart' id={pd._id}>
					<h5 className='highlighted'>${pd.pdPrice}</h5>
					<div className='cart' id={pd._id}>
						<ShoppingCartIcon style={animatedStyle} id={pd._id} />
						<p className='highlighted'>Add to</p>
						<p className='highlighted'>Cart</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductCard; // cardholder