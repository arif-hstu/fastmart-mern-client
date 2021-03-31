import React from 'react'
import './Home.css'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'

function Home() {
	return (
		<div className='Home'>
			<Header />
			<Banner />
		</div>
	)
}

export default Home