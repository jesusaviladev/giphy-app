
const register = ({ username, password }) => {

	const apiURL = `https://giphy-api-jesusaviladev.herokuapp.com/register`


	const newUser = {
		username: username,
		password: password
	}

	return fetch(apiURL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser)
	})
	.then(response => {

		if(response.ok){
			return response.json()
		}

		else {
			return Promise.reject(response)
		}
	})
	
}


export default register