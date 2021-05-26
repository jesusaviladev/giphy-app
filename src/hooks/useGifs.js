import {useState, useEffect, useContext} from 'react';
import getGifs from '../services/getGifs.js';
import Context from '../context/GifsContext.js';

const INITIAL_PAGE = 0

export default function useGifs ({ keyword } = { keyword: null }) {

	const {gifs, setGifs} = useContext(Context)
	const [page, setPage] = useState(INITIAL_PAGE)
	const [loading, setLoading] = useState(false)
	//ESTADOS ↑

	//keyword para llamar al servicio
	const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'mike wazowski'
	 
	useEffect(() => { 
	 	//pedimos datos a la API con el servicio getGifs
	 	setLoading(true)
	     getGifs({keyword : keywordToUse})
	      .then(res => {
	      	setGifs(res)
	      	setLoading(false)
	      	localStorage.setItem('lastKeyword', keyword)
	      })

	      return () => {
	      	console.log('desmontaje')

	      }

	  }, [keyword, keywordToUse, setGifs])

	useEffect(()=> {
			//pedimos datos de paginacion
	 	if(page === INITIAL_PAGE) return null

	 	getGifs({keyword: keywordToUse, page: page})
	 		.then(nextGifs => {
	 			setGifs(prevGifs => prevGifs.concat(nextGifs))
	 		})


	 }, [keywordToUse, page, setGifs])

	 return {loading, gifs, setPage}
}