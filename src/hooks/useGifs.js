import {useState, useEffect, useContext} from 'react';
import getGifs from '../services/getGifs.js';
import Context from '../context/GifsContext.js';

const INITIAL_PAGE = 0

export default function useGifs ({ keyword, rating } = { keyword: null, rating: 'g' }) {

	const {gifs, setGifs} = useContext(Context)
	const [page, setPage] = useState(INITIAL_PAGE)
	const [loading, setLoading] = useState(false)
	//ESTADOS ↑

	//keyword para llamar al servicio
	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'dog'
	 
	useEffect(() => { 
	 	//pedimos datos a la API con el servicio getGifs
	 	setLoading(true)
	     getGifs({keyword: keywordToUse, rating: rating})
	      .then(res => {
	      	setGifs(res)
	      	setLoading(false)
	      	localStorage.setItem('lastKeyword', keyword)
	      })

	      return () => {
	      	console.log('desmontaje')

	      }

	  }, [keyword, keywordToUse, setGifs, rating])

	useEffect(()=> {
			//pedimos datos de paginacion
	 	if(page === INITIAL_PAGE) return null

	 	getGifs({keyword: keywordToUse, page: page, rating: rating})
	 		.then(nextGifs => {
	 			setGifs(prevGifs => prevGifs.concat(nextGifs))
	 		})


	 }, [keywordToUse, page, setGifs, rating])

	 return {loading, gifs, setPage}
}