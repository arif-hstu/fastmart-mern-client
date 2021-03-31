import React from 'react'
import './CardHolder.css'
import ProductCard from '../ProductCard/ProductCard'

function CardHolder({allProducts}) {
	return (
		<div className='CardHolder'>
			{
				allProducts.map(pd => <ProductCard pd={pd}></ProductCard>)
			}
		</div>
	)
}

export default CardHolder; //to Home