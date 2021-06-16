import React from 'react'
import './SearchForm.css'
import { useLocation } from 'wouter'
import useForm from './useForm.js'
//exportamos componente formulario para evitar renderizados

const SearchForm = ({initialKeyword = '', initialRating = 'g'}) => {
	const RATINGS = ['g', 'pg', 'pg-13', 'r']

	//Usamos varios estados
	//const [ keyword, setKeyword ] = useState(decodeURIComponent(initialKeyword))
	//Tomamos la keyword como parte del estado (RENDERIZA DE NUEVO)
	//const [rating, setRating] = useState(initialRating)
	//estado del rating de la búsqueda

	//Usamos use reducer para manejar varios estados 

	//recuperamos el estado del hook con el reducer
	const { keyword, 
			rating, 
			updateKeyword, 
			updateRating } = useForm({initialKeyword, initialRating})

	const [, pushLocation ] = useLocation()
	//Usamos el hook de wouter para 
	//cambiar la localizacion (se puede llamar como sea)

	const handleSubmit = (e) => {
		//Gestiona el formulario
		e.preventDefault()
		//usamos el hook de localizacion pasandole la keyword del input
		pushLocation(`/search/${keyword}/${rating}`)
	}

	const handleChange = (e) => {
		//Cambiamos el estado cada vez que se tipea en el input.
		//ADVERTENCIA: vuelve a renderizar el componente
		// setKeyword(e.target.value) 
		//dispatch({type: REDUCER_ACTIONS.UPDATE_KEYWORD, payload: e.target.value})
		updateKeyword(e.target.value)
	}

	const handleChangeRating = (e) => {
		//cambiamos el rating segun el select
		// setRating(e.target.value)
		//dispatch({type: REDUCER_ACTIONS.UPDATE_RATING, payload: e.target.value})
		updateRating(e.target.value)
	}
	

	return (
		<form action="#" className="search-form" id="search" onSubmit={handleSubmit}>
			<input type="text" 
				name="search" 
				placeholder="Search a gif..."
				onChange={handleChange}
				className="search-form__input"
				value={keyword}
			/>
			<select value={rating} 
			onChange={handleChangeRating} 
			className="search-form__select">
				{RATINGS.map(rate => <option value={rate} 
					key={rate}>{rate}</option>)}
			</select>
			<button className="button button--search">Buscar</button>
		</form>
		)
}

export default React.memo(SearchForm)