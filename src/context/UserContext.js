import React, { useState, useEffect } from 'react'
import getUserFavs from '../services/getUserFavs.js'

const Context = React.createContext({})

export const UserContextProvider = ({children}) => {
	//Creamos estado para recuperar el json web token y actualizarlo 
	const [ jwt, setJWT ] = useState(() => window.sessionStorage.getItem('token'))
	const [ favs, setFavs ] = useState([])

	useEffect(()=>{
		//recuperamos todos los favoritos del usuario
		if (!jwt) return setFavs([])

		getUserFavs({ token: jwt })
			.then(favs => {
				setFavs(favs)
			})

	}, [jwt])

	return (
		<Context.Provider value={{jwt, setJWT, favs, setFavs}}>
			{children}
		</Context.Provider>
		)
}

export default Context