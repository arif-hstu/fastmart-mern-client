import React from 'react'
import './ProductCard.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function ProductCard({pd}) {
	console.log(pd)
	return (
		<div className='ProductCard'>
			<img src={pd.pdImage} alt="Product Image" />
			<p><small>{pd.pdCatagory}</small></p>
			<h5>{pd.pdName}</h5>
			<div className='priceCart'>
				<h5>${pd.pdPrice}</h5>
				<div className='cart'>
					<ShoppingCartIcon style={{color:'#fa4f90'}}/>
					<p>Add to</p>
					<p>Cart</p>
				</div>
			</div>

		</div>
	)
}

export default ProductCard; // cardholder