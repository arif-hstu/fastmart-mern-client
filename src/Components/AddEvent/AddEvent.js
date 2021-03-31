import React from 'react'
import './AddEvent.css'

function AddEvent() {
	return (
		<div className='AddEvent'>
			<div className="part1">
				<h5>Product Name</h5>
				<input type="text" name="" id="" />
				<h5>Price</h5>
				<input type="text" />
			</div>
			<div className="part2">
				<h5>Category</h5>
				<input type="text" />
				<h5>Image</h5>
				<div className="imageUpload">
					<input type="file" name="" id="" />
				</div>
			</div>
			<button>Submit</button>
		</div>
	)
}

export default AddEvent;