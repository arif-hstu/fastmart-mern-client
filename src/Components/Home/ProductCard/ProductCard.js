import React, { useContext } from 'react';
import { CartContext, UserContext } from '../../../App';
import './ProductCard.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function ProductCard({ pd }) {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	// handle cart
	const [cart, setCart] = useContext(CartContext);
	const addToCart = (e) => {
		e.preventDefault();
		if (e.target.parentNode.id || e.target.id) {
			const newCart = [...cart, e.target.parentNode.id || e.target.id];
			setCart(newCart);

			// store cart array to the loggedInUser state
			const newUserInfo = { ...loggedInUser };
			newUserInfo.cart = newCart;
			setLoggedInUser(newUserInfo);
		}
	}

	return (
		<div onClick={addToCart} id={pd._id} className='ProductCard'>
			<img src={pd.pdImage} alt="Product Image" />
			<p id={pd._id}><small>{pd.pdCatagory}</small></p>
			<h5>{pd.pdName}</h5>
			<div className='priceCart' id={pd._id}>
				<h5 className='highlighted'>${pd.pdPrice}</h5>
				<div className='cart' id={pd._id}>
					<ShoppingCartIcon id={pd._id} style={{ color: '#fa4f90' }} />
					<p className='highlighted'>Add to</p>
					<p className='highlighted'>Cart</p>
				</div>
			</div>
		</div>
	)
}

export default ProductCard; // cardholder