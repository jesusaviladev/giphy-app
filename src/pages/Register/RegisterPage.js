import React, { useCallback } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import register from '../../services/register.js'
import './RegisterPage.css'
import Spinner from '../../components/Spinner/Spinner.js'
import { Helmet } from 'react-helmet'

const RegisterPage = () => {

	const handleSubmit = useCallback((values, { setFieldError })=>{
			
			return register(values)
					.then(response => console.log(response))
					.catch(response => {
									
						if(response.body){
							response.json()
							.then(error => {
							console.log(error)
							setFieldError('username', 'Username is invalid')
							})
								}

						else 
							console.log(response)

								})
					},[])


	const validateForm = useCallback((values) => {
				const errors = {}

				if(values.username.trim() === ''){
					errors.username = 'Required username'
				}

				if(values.password.trim() === ''){
					errors.password = 'Required password'
				}

				return errors

			},[])

	return (
		<>	
			<Helmet>
				<title>Sign up page | Giphy App</title>
			</Helmet>
			<h2 className="register__title">Sign up</h2>

			<Formik 
			initialValues={{username: '', password: ''}}
			validate={validateForm} 
			onSubmit={handleSubmit}>
		{
				({ isSubmitting, errors }) => {

				if(isSubmitting) return <Spinner/>

				return <Form className="form">
							<div className="form__field">
								<label className="form__label">
									Crea tu usuario
									<Field 
									className="form__input"
									name="username" 
									placeholder="Your username"/>
								</label>
								<ErrorMessage 
								className="form__error" 
								name="username" 
								component="span"/>		
							</div>
							<div className="form__field">
								<label className="form__label">
									Elige tu contraseña
									<Field
									className="form__input" 
									type="password" 
									name="password" 
									placeholder="Your password"/>
								</label>
								<ErrorMessage
								className="form__error" 
								name="password" 
								component="span"/>
							</div>

							<button 
							className="button" 
							type="subtmit"
							disabled={isSubmitting}>
							Registrarse</button>
												
						</Form>

					}
			}

			</Formik>
		</>
		)
}

export default RegisterPage