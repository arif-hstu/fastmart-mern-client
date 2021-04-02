import React, { useState } from 'react';
import './AddProduct.css';
import axios from 'axios';
require('dotenv').config();


function AddProduct() {
	// handle INPUT PRODUCT to send to the database
	const [inputProduct, setInputProduct] = useState({});
	const [error, setError] = useState({});
	const [spinner, setSpinner] = useState(false);
	const [uploadMessage, setUploadMessage] = useState('');


	// handle upload image to the imgbb api
	// const [imageUrl, setImageUrl] = useState('');
	const uploadImage = (img) => {
		let body = new FormData();
		body.set('key', process.env.REACT_APP_IMGBB_KEY)
		body.append('image', img)

		return axios({
			method: 'post',
			url: 'https://api.imgbb.com/1/upload',
			data: body
		})
			.catch(err => {
				setError({
					error: 'pdImage'
				})
			})
	};
	const handleImage = (e) => {
		uploadImage(e.target.files[0])
			.then(res => {
				if (res !== undefined) {
					const newProduct = { ...inputProduct };
					newProduct.pdImage = res.data.data.url;
					setInputProduct(newProduct);
					setSpinner(false);

				} else {
					const newProduct = { ...inputProduct };
					delete newProduct.pdImage;
					setInputProduct(newProduct);
				}
			})
	}


	// process input data
	const handleInputText = (e) => {
		setUploadMessage('');
		setSpinner(false);

		let valid = false;
		// if input is product name
		if (e.target.name === 'pdName' || e.target.name === 'pdCatagory') {
			const stringRegex = /[a-zA-Z]/;
			valid = stringRegex.test(e.target.value)

			if (valid) {
				const newProduct = { ...inputProduct };
				newProduct[e.target.name] = e.target.value;
				setInputProduct(newProduct);
				valid = false;

			} else {
				const newProduct = { ...inputProduct };
				delete newProduct[e.target.name];
				setInputProduct(newProduct);

				setError({
					error: e.target.name
				});
			}
		}

		// if input is price
		if (e.target.name === 'pdPrice') {
			const numberRegex = /^[0-9]+$/;
			valid = numberRegex.test(e.target.value);

			if (valid) {
				const newProduct = { ...inputProduct };
				newProduct[e.target.name] = e.target.value;
				setInputProduct(newProduct);
				valid = false;
			} else {
				const newProduct = { ...inputProduct };
				delete newProduct[e.target.name];
				setInputProduct(newProduct);

				setError({
					error: e.target.name
				});
			}
		}
	}

	// remove error message
	const removeError = () => {
		setSpinner(false);
		setError({});
	}

	// loadSpinner 
	const loadSpinner = () => {
		removeError();
		setSpinner(true);
	}


	/*******
	* send processed data
	* to the server
	*******/
	const sendProductToDatabase = (e) => {
		// e.preventDefault();
		if (inputProduct.pdName && inputProduct.pdPrice && inputProduct.pdCatagory && inputProduct.pdImage) {

			// send product to the database
			fetch('https://fastmart.herokuapp.com/addProduct', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(inputProduct)
			})
				.then(res => res.json())
				.then(data => setUploadMessage(data.response));
		} else {
			setError({
				error: 'generalError'
			});
		}
	}

	return (
		<div className='AddProduct'>
			<div className="part1">
				<h5>Product Name</h5>
				<input onFocus={removeError} onBlur={handleInputText} id='Product' type="text" name="pdName" />
				{
					error.error === 'pdName' && <p style={{ color: '#fa4e92' }}>Please input a valid Product Name</p>
				}
				<h5>Price</h5>
				<input onFocus={removeError} onBlur={handleInputText} type="text" name='pdPrice' />
				{
					error.error === 'pdPrice' && <p style={{ color: '#fa4e92' }}>Please input a valid Price</p>
				}
			</div>
			<div className="part2">
				<h5>Category</h5>
				<input onFocus={removeError} onBlur={handleInputText} id='Category' type="text" name='pdCatagory' />
				{
					error.error === 'pdCatagory' && <p style={{ color: '#fa4e92' }}>Please input a valid Category Name</p>
				}

				<h5>Image</h5>
				<div className="imageUpload">
					<input type="file" onClick={loadSpinner} onChange={handleImage} />
					{
						error.error === 'pdImage' && <p style={{ color: '#fa4e92' }}>There was an error! Please retry.</p>
					}
				</div>
			</div>
			<div className="generalError">
				{
					error.error === 'generalError' &&
					<p style={{
						color: '#fa4e92'
					}}>There was an error! Please try again.
					</p>
				}

				{
					spinner &&
					<p style={{
						color: 'green'
					}}>Uploading Image...
					</p>
				}

				{
					uploadMessage && 
					<p style={{
						color: 'green'
					}}>{uploadMessage}
					</p>
				}
			</div>
			<button onClick={sendProductToDatabase}>Submit</button>
		</div>
	)
}

export default AddProduct;