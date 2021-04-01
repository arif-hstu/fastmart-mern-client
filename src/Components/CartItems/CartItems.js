import React from 'react';
import './CartItems.css';
import logo from '../../images/logo.png'

function CartItems(props) {
	const [selectedAllProducts, setSelectedAllProducts] = props.selectedAllProducts;

	return (
		<>
			<div className='CartItems'>
				<div className="CartTitle">
					<h3>SHOPPING CART</h3>
					<h3>{selectedAllProducts.length} Items</h3>
				</div>
				<div className="headline">
					<p>PRODUCT DETAILS</p>
					<p>QUANTITY</p>
					<p>PRICE</p>
					<p>TOTAL</p>
				</div>
				{
					selectedAllProducts.length > 0 && selectedAllProducts.map(pd =>
						<div className="items">
							<div className="item">
								<img src={pd.pdImage} alt="" />
								<div className="itemInfo">
									<h6>{pd.pdName}</h6>
									<p>{pd.pdCatagory}</p>
									<p>Remove</p>
								</div>
							</div>
							<div className="quantity">
								<p className='plus'>- </p>
								<input type="number" value={pd.pdCount} />
								<p className='minus'> +</p>
							</div>
							<p>{pd.pdPrice}</p>
							<p>{pd.pdPrice * pd.pdCount}</p>
						</div>
					)
				}
			</div>

		</>
	)
}

export default CartItems; // to CheckOut