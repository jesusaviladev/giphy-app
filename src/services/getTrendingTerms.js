import API_KEY from './config.js'

const getTrendingTerms = () => {
	//Servicio para hacer peticion de palabras trending
	const apiURL = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`

	return fetch(apiURL)
	.then(response => {
		if (response.ok){
			const res = response.json()
			return res
		}
	})
	.then(res => {
		const { data } = res

		if(Array.isArray(data)){
			return data
		}
		
	})
	.catch(err => {
		console.log(err)
		return []
	})

}

export default getTrendingTerms