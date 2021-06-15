import React, { useRef, useEffect, useCallback } from 'react';
import Giflist from '../../components/Giflist/Giflist.js'
import useGifs from '../../hooks/useGifs.js'
import Spinner from '../../components/Spinner/Spinner.js'
import SearchForm from '../../components/SearchForm/SearchForm.js'
import useNearScreen from '../../hooks/useNearScreen.js'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

const Search = ({params}) => {

	const { keyword, rating } = params 
	const { loading, gifs, setPage } = useGifs({keyword, rating}) //recuperar gifs
	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({ //lazy load
		distance: '200px', 
		externalRef: loading ? null : externalRef,
		once: false
	})

	//libreria para evitar que la funcion se llame demasiadas veces
	const debounceHandleNextPage = useCallback(
		debounce(() => setPage(prevPage => prevPage + 1), 200)
		, [setPage])

	useEffect(()=> {
		// console.log(isNearScreen)
		if(isNearScreen) debounceHandleNextPage()

	}, [isNearScreen, debounceHandleNextPage])


	 if(loading){
	 	return (
	 		<>
	 		<Helmet>
	 			<title>Cargando...</title>
	 		</Helmet>
		 	<Spinner></Spinner>
		 	</>
	 		);
	 }


	return (
		<>
			<Helmet>
				<title>{`Resultados de búsqueda de: ${decodeURI(keyword)}`}</title>
				<meta name="description" 
				content={`Resultados de búsqueda de: ${decodeURI(keyword)}`}/>
			</Helmet>

			<SearchForm initialKeyword={keyword} initialRating={rating}/>
			
			<h2 className="search__title">{`Resultados de búsqueda: 
				"${decodeURI(keyword)}"`}</h2>

			<Giflist gifs={gifs}></Giflist>

			<div id="visor" ref={externalRef}></div>
		</>
		);
}

export default Search