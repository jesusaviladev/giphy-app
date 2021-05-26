import React, {useContext} from 'react'
import Context from '../../context/GifsContext.js'
import Gif from '../../components/Gif/Gif.js'

const Detail = ({params}) =>{
	const {id} = params
	
	const { gifs } = useContext(Context)

	const gif = gifs.find( singleGif => singleGif.id === id) 

	if(!gif)
		return (
			<p>Gif con id {id} no ha sido encontrado</p>
			);


	return (
		<>
			<p>Gif con id {id}</p>
			<Gif {...gif}></Gif>
		</>

		);
}

export default Detail