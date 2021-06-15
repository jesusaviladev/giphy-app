import React from 'react'
import Helmet from 'react-helmet'
import Login from '../../components/Login/Login.js'
import './LoginPage.css'

const LoginPage = () => {

	return (
		<>
			<Helmet>
				<title>Giphy App | Login user</title>
			</Helmet>

			<h2 className="login-page__title">Login Page</h2>

			<Login/>

		</>
		)
}

export default LoginPage