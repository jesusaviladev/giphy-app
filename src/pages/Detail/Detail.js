import React from 'react'
import Gif from '../../components/Gif/Gif.js'
import useSingleGif from '../../hooks/useSingleGif.js'
import Spinner from '../../components/Spinner/Spinner.js'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

const Detail = ({params}) =>{
	const { id } = params
	
	const { gif, loading, error } = useSingleGif({id})

	if (loading){
		return (
			<Spinner/>
			)
	}

	if(error){
		return <Redirect to='/404'></Redirect>
	}

	if(!gif) return null 

	return (
		<>
		<Helmet>
			<title>{gif.title}</title>
			<meta name="description" content={`Detalle de ${gif.title}`}/>
		</Helmet>
		<section className="detail">
			<h2 className="detail__title">{gif.title}</h2>
			<div className="detail__content">
				<Gif {...gif}></Gif>
			</div>
		</section>
		</>

		);
}

export default Detail