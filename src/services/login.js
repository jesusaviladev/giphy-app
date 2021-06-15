
export const logUser = ( username, password ) => {

	const loginUser = {
		username: username,
		password: password
	}

	const apiURL = 'https://giphy-api-jesusaviladev.herokuapp.com/login'

		return fetch(apiURL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginUser)
		})
			.then(response => {
				if(response.ok){
					return response.json()
				}

				else {
					throw new Error ('Error en la conexion')
				}
			})
			.then(res  => {
				const { token } = res
			
				return token
			})
}

