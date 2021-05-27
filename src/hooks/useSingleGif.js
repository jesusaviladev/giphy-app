import { useContext, useState, useEffect } from 'react'
import Context from '../context/GifsContext.js'
// import useGifs from './useGifs.js'
import getSingleGif from '../services/getSingleGif.js'

const useSingleGif = ({ id }) => {

	const { gifs } = useContext(Context)
	const gifFromCache = gifs.find( singleGif => singleGif.id === id) 
	//recuperamos gifs del cache del estado si lo hay
	const [gif, setGif] = useState(gifFromCache)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	//si no lo hay llamamos a la API
	useEffect(()=>{
		if(!gif){

			setLoading(true)
			getSingleGif({ id })
			.then(gif => {
				setGif(gif)
				setLoading(false)
			})
			.catch(err => {
				console.log(err)
				setLoading(false)
				setError(true)
			})
		}
	}, [gif, id])

	return { gif, loading, error }
}

export default useSingleGif