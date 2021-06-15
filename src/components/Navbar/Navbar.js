import React from 'react'
import { Link, useRoute } from 'wouter'
import useUser from '../../hooks/useUser.js'

import './Navbar.css'

const Navbar = () => {

	const { isLogged, logout } = useUser()
	//recuperamos flag del hook para loguearse

	//verificamos si existe match para la ruta y no renderizamos nada
	const [ match ] = useRoute('/login')

	const handleClick = () => {
		logout()
	}


	if(match) return null

	return (
		<nav className="navbar">
		      {
		      	isLogged ? 
		      	<button className="navbar__button" 
		      	onClick={handleClick}>Logout</button>
		      	:
		      	<>
		      		<Link to="/login" className="navbar__link">Login</Link>
		      		<Link to="/register" className="navbar__link">Sign up</Link>
		      	</>
		      }
		 </nav>
		)	
}

export default Navbar