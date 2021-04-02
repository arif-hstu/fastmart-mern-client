import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../App'
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './PlaceOrder.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
};

Modal.setAppElement('#root')


function PlaceOrder({ totalPrice, selectedAllProducts }) {

	// useHistory hook to redirect from place order to trackOrder
	const history = useHistory();
	
	const [loggedInUser, setLoggeddInUser] = useContext(UserContext);
	const [spinner, setSpinner] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	var subtitle;
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be ac.
		subtitle.style.color = 'Black';
	}

	function closeModal() {
		setIsOpen(false);
	}

	// placeOrder function to
	// send info to the database
	const placeOrder = () => {
		setErrorMessage(false);
		setSpinner(true);

		fetch('https://fastmart.herokuapp.com/placeOrder', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(loggedInUser)
		})
			.then(res => res.json())
			.then(data => {
				setSpinner(false);

				// redirect to the trackOrder component
				const path = 'trackOrder';
				history.push(path);
			})
			.catch(err => {
				setSpinner(false);
				setErrorMessage(true);
			})
	}

	useEffect(() => {
		setErrorMessage(false)
	}, [])

	return (
		<div className='PlaceOrder'>
			<button onClick={openModal}>Check Out</button>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				className='Modal'
				overlayClassName="Overlay"
				contentLabel="Check Out"
			>
				<h2 ref={_subtitle => (subtitle = _subtitle)}>Check Out</h2>
				<button style={{ padding: '0.4rem 3rem', marginBottom: '2rem' }} onClick={closeModal}>Back to Modify</button>
				<div className='modalData'>

					<div className="headline">
						<h3>ORDER DETAILS</h3>
					</div>

					<div className='orderDetails'>
						<div className="property">
							<p>Sales Consultants:</p>
							<p>Date:</p>
							<p>Order ID:</p>
						</div>

						<div className="value">
							<p>Arif</p>
							<p>{loggedInUser.date}</p>
							<p>{loggedInUser.orderID}</p>
						</div>
					</div>

					<div className="buyerInformation">
						<h3>BUYER INFORMATION</h3>
					</div>

					<div className="userDetails">
						<div className="property">
							<p>Name:</p>
							<p>Email:</p>
							<p>Phone</p>
							<p>Address:</p>
						</div>
						<div className="value">
							<p>{loggedInUser.displayName}</p>
							<p>{loggedInUser.email}</p>
							<p>{loggedInUser.phone}</p>
							<p>{loggedInUser.address}</p>
						</div>
					</div>

					<div className="productsHeading">
						<h3>PRODUCTS</h3>
					</div>

					<div className="listOfProducts">
						<div className="listHeading">
							<h5>#</h5>
							<h5>Product Name</h5>
							<h5>Unit Price</h5>
							<h5>Quantity</h5>
							<h5>Subtotal</h5>
						</div>

						{
							selectedAllProducts.map(pd =>
								<div className="listProducts">
									<p>#</p>
									<p>{pd.pdName}</p>
									<p>{pd.pdPrice}</p>
									<p>{pd.pdCount}</p>
									<p>{pd.pdCount * pd.pdPrice}</p>
								</div>
							)
						}

					</div>
					<div className="mainTotal">
						<h5>TOTAL:</h5>
						<h5>৳{totalPrice}</h5>
					</div>
					<button onClick={placeOrder} className="orderButton">
						PlaceOrder
					</button>
					{
						spinner &&
						<p style={{
							color: 'green',
							margin: 'auto',
							marginTop: '0.5rem'
						}}>Your Request is being processed...</p>
					}
					{
						errorMessage &&
						<p style={{
							color: 'red',
							margin: 'auto',
							marginTop: '0.5rem'
						}}>An error occured! Please try again.</p>
					}
				</div>
			</Modal>

		</div>
	);
}

export default PlaceOrder; // to OrderSummary

