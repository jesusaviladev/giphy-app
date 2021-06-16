import React, { useState, useEffect } from 'react'
import { useLocation } from 'wouter'
import useUser from '../../hooks/useUser'
import Spinner from '../Spinner/Spinner.js'
import './Login.css'

const Login = ({onLogin = null}) => {

	const [ username, setUsername ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ , navigate ] = useLocation()
	const { isLogged, login, isLoginLoading, hasLoginError } = useUser()
	//recuperamos funcion para loguearse del hook y navegamos hacia la home

	useEffect(()=>{

		if(isLogged) {

			onLogin && onLogin()

			navigate('/')
		}


	},[isLogged, navigate, onLogin])

	const handleSubmit = (e) => {
		e.preventDefault()
		login({ username, password })
	}

	const handleChangeUsername = (e) => {
		setUsername(e.target.value)
	}

	const handleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	if(isLoginLoading){
		return <Spinner/>
	}


	return (
		<>	
			<form className="form" id="login-form" onSubmit={handleSubmit}>
				<div className="form__field">
					<label htmlFor="username" className="form__label">
						User: 
					</label>
					<input 
					type="text" 
					id="username"
					name="username"
					className="form__input"
					placeholder="username"
					onChange={handleChangeUsername}
					value={username}
					/>
				</div>
				<div className="form__field">
					<label htmlFor="password" className="form__label">
						Password:
					</label>
					<input 
					type="password" 
					id="password"
					name="password"
					className="form__input"
					placeholder="password"
					onChange={handleChangePassword}
					value={password}
					/>
				</div>
				<button className="button">Login</button>
				
				{
					hasLoginError ? <p>Usuario o contraseña incorrectos</p> : null
				}
			</form>
		</>
		)
}

export default React.memo(Login)