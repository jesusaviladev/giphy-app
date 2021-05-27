import React from 'react'
import Gif from '../../components/Gif/Gif.js'
import useSingleGif from '../../hooks/useSingleGif.js'
import Spinner from '../../components/Spinner/Spinner.js'
import { Redirect } from 'wouter'

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