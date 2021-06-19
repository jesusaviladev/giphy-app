
const deleteFavService = (id, token) => {

	const apiURL = `https://giphy-api-jesusaviladev.herokuapp.com/users/favs/${id}`

	return fetch(apiURL, {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	.then(response => {

		if(!response.ok) return Promise.reject(response.json())


		return response.json()
	})
	.catch(error => {
		console.log(error)
		return []
	})
}	

export default deleteFavService