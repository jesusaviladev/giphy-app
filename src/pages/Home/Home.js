import React from 'react'
import Giflist from '../../components/Giflist/Giflist.js'
import LazyTrending from '../../components/TrendingSearches/LazyTrendingSearches.js'
import SearchForm from '../../components/SearchForm/SearchForm.js'
import useGifs from '../../hooks/useGifs.js'
import { Helmet } from 'react-helmet'

//Esta es la pagina que carga la home (pagina principal)
const Home = () => {

	const { gifs } = useGifs() //USAMOS CUSTOM HOOK CON LA FUNCION DE BUSCAR GIFS

	return(
		<>
			<Helmet>
				<title>Giphy App | Home </title>
				<meta name="description" content="Buscador de gifs"/>
			</Helmet>

			<SearchForm></SearchForm>
			
			<div className="app__container">
				<section className="app__body">	

					<h2>Última búsqueda</h2>
					<Giflist gifs={gifs}></Giflist>

				</section>
				<LazyTrending/>
			</div>
		</>
		);
}

export default Home