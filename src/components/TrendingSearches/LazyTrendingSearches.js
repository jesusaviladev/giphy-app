import React, { Suspense } from 'react'
import useNearScreen from '../../hooks/useNearScreen.js'
import Spinner from '../Spinner/Spinner.js'

const TrendingSearches = React.lazy(() => import('./TrendingSearches'))


const LazyTrending = () => {
	//componente que envuelve el trending para hacer lazy load
	
	const {isNearScreen, fromRef} = useNearScreen({distance: '100px'})


	return (
		<Suspense fallback={<Spinner/>}>
			<div ref={fromRef}>
				{isNearScreen ? <TrendingSearches/> : <Spinner/>}
			</div>
		</Suspense>
		)
}

export default LazyTrending