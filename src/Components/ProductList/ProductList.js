import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './ProductList.css';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import BorderColorIcon from '@material-ui/icons/BorderColor';;


function ProductList() {

	// useState to hold the allProducts
	const [allProducts, setAllProducts] = useState([]);
	// fetch products by api
	useEffect(() => {
		axios('https://fastmart.herokuapp.com/allProducts')
			.then(data => setAllProducts(data.data));
	}, []);

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
						<div className='listItems'>
							<p>{pd.pdName}</p>
							<p>{pd.pdPrice}</p>
							<p>{pd.pdCatagory}</p>
							<p><img src={pd.pdImage} alt="Product"/></p>
							<p>
								<BorderColorIcon style={{
									color:"#fff", 
									backgroundColor:"#3bc83b",
									borderRadius: "0.2rem"
								}}/>
								<DeleteOutlineIcon style={{
									color: "#fff", 
									backgroundColor:"#ff4f55",
									borderRadius: "0.2rem",
									marginLeft: "0.4rem"
								}}/>
							</p>
						</div>
					</>)
				}
			</div>

		</>
	)
}

export default ProductList;