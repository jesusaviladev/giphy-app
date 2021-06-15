
const addFavService = (id, token) => {
	const apiURL = `https://giphy-api-jesusaviladev.herokuapp.com/users/favs/${id}`
	
	return fetch(apiURL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	.then(response => {
		if(response.ok){
			return response.json()
		}

		else throw new Error (`Bad request ${response.status}`)

	})
	.then(favs => {
		console.log(favs)
		return favs
	})
	.catch(error => {
		console.log(error)
		return []
	})
}

export default addFavService