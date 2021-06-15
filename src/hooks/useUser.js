import { useCallback, useContext, useState } from 'react'
import Context from '../context/UserContext.js'
import { logUser } from '../services/login.js'
import addFavService from '../services/addFavService.js'
import debounce from 'just-debounce-it'

const useUser = () => {

	//enviamos json web token al contexto
	const { jwt, setJWT, favs, setFavs } = useContext(Context) 
	//estado para gestionar la respuesta de la api
	const [auth, setAuth] = useState({
		loading: false,
		error: false
	})
	//llamamos al servicio y recuperamos el jsonwebtoken
	const login = useCallback(({ username, password })=>{

		setAuth({...auth, loading: true}) //actualizamos estado

		logUser(username, password)
			.then(token => {

				setJWT(token)
				setAuth({...auth, loading: false})
				window.sessionStorage.setItem('token', token)
			})
			.catch(error => {
				console.log(error)
				window.sessionStorage.removeItem('token')
				setAuth({loading: false, error: true})
			})


	}, [setJWT, auth])


	const logout = useCallback(()=>{

		setJWT(null)
		window.sessionStorage.removeItem('token')


	},[setJWT])


	const addFav = useCallback(debounce(({ id })=>{
		//utilizamos servicio y pasamos id del componente gif y
		//token del estado del contexto

		addFavService(id, jwt)
			.then(favs => {
				
				setFavs(favs)
			})

	}, 500), [setFavs, jwt])


	//exportamos flag de login y funcion para loguearse
	return {
		isLogged: Boolean(jwt),
		isLoginLoading: auth.loading,
		hasLoginError: auth.error,
		login,
		logout,
		favs,
		addFav
	}
}

export default useUser