import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ProductList.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import BorderColorIcon from '@material-ui/icons/BorderColor';;


function ProductList() {
	// update list after deleting product 
	const [deletedProduct, setDeletedProduct] = useState({
		deletedId: ''
	})

	// useState to hold the allProducts
	const [allProducts, setAllProducts] = useState([]);
	// fetch products by api
	useEffect(() => {
		axios('https://fastmart.herokuapp.com/allProducts')
			.then(data => setAllProducts(data.data));
	}, [deletedProduct]);


	// handle deleteProduct funtionality
	const deleteProduct = (e) => {
		if (e.target.parentNode.id || e.target.id) {

			fetch('https://fastmart.herokuapp.com/deleteProduct', {
				method: 'POST',
				body: JSON.stringify({
					deletedId: e.target.parentNode.id || e.target.id
				}),
				headers: {
					'Content-type': 'application/json'
				}
			})
			.then(res => {
				res.json();
				setDeletedProduct({
					deletedId: e.target.parentNode.id || e.target.id
				})
			})
			.then(data => {
				//....
			})
			.catch(error => {
				//....
			})
		}
	}

	return (
		<>
			<div className='ProductList'>
				<div className="headline">
					<p>Product Name</p>
					<p>Price</p>
					<p>Category</p>
					<p>Image</p>
					<p>Action</p>
				</div>
				{
					allProducts.map(pd => <>
						<div id={pd._id} className='listItems'>
							<p>{pd.pdName}</p>
							<p>{pd.pdPrice}</p>
							<p>{pd.pdCatagory}</p>
							<p><img src={pd.pdImage} alt="Product" /></p>
							<div className='actionHolder'>
								<BorderColorIcon style={{
									color: "#fff",
									backgroundColor: "#3bc83b",
									borderRadius: "0.2rem"
								}} />
								<button id={pd._id} className="deleteIcon" onClick={deleteProduct}>
									<DeleteOutlineIcon id={pd._id} style={{
										color: "#fff",
										backgroundColor: "#ff4f55",
										borderRadius: "0.2rem",
										marginLeft: "0.4rem",
										cursor: 'pointer'
									}} />
								</button>
							</div>
						</div>
					</>)
				}
			</div>

		</>
	)
}

export default ProductList;