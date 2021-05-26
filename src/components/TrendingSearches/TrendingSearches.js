import React, {useState, useEffect } from 'react'
import Categories from '../Categories/Categories.js'
import getTrendingTerms from '../../services/getTrendingTerms.js'

const TrendingSearches = () => {
	//componente para recuperar palabras populares
	const [trends, setTrends] = useState([])
	
	useEffect(()=>{
		getTrendingTerms()
			.then(data => {
				setTrends(data)
			})
	},[])


	return (
		<Categories terms={trends} name="Tendencias"></Categories>
		)
}

export default TrendingSearches