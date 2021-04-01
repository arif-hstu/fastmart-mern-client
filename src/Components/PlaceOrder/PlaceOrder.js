import React, { useContext } from 'react';
import { UserContext } from '../../App'
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

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function PlaceOrder({ totalPrice, selectedAllProducts }) {
	const [loggedInUser, setLoggeddInUser] = useContext(UserContext);


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
		fetch('http://localhost:5000/placeOrder', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(loggedInUser)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
		})
	}

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
							<p>Warranty Certification:</p>
							<p>Invoice:</p>
						</div>

						<div className="value">
							<p>Arif</p>
							<p>{loggedInUser.date}</p>
							<p>4152rere</p>
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
				</div>
			</Modal>
		</div>
	);
}

export default PlaceOrder; // to OrderSummary

