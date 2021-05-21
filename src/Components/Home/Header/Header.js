import React from 'react'
import './Header.css'
import TopBar from '../../Shared/TopBar/TopBar'
import NavBar from '../../Shared/NavBar/NavBar'
import SearchBar from '../../Shared/SearchBar/SearchBar'

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