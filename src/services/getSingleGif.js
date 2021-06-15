import API_KEY from './config.js'

const getSingleGif = ({ id }) => {
	const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`

	return fetch(apiURL)
	.then(response => {
		if (response.ok){
			const res = response.json()
			return res
		}
		else{
			throw new Error(`Status code: ${response.status}`)
		}
	})
	.then(res => {

		const { data } = res
		const { images, title, id } = data
		const { url } = images.downsized_medium

		return { title, id, url }
	})

}

export default getSingleGif