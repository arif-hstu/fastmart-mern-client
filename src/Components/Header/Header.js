import React from 'react'
import './Header.css'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
	return (
		<div className='Header'>
			<TopBar />
			<SearchBar />
			<NavBar />
		</div>
	)
}

export default Header; // to App