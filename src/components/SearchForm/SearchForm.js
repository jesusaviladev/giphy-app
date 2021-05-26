import React, { useState } from 'react'
//exportamos componente formulario para evitar renderizados

const SearchForm = ({ onSubmit }) => {

	const [ keyword, setKeyword ] = useState('')
	//Tomamos la keyword como parte del estado (RENDERIZA DE NUEVO)

	const handleSubmit = (e) => {
		//Gestiona el formulario
		e.preventDefault()
		//usamos el hook de localizacion pasandole la keyword del input
		onSubmit({keyword})

	}

	const handleChange = (e) => {
		//Cambiamos el estado cada vez que se tipea en el input.
		//ADVERTENCIA: vuelve a renderizar el componente
		setKeyword(e.target.value)
	}

	return (
		<form action="#" className="form" id="search" onSubmit={handleSubmit}>
			<input type="text" 
				name="search" 
				placeholder="Search a gif..."
				onChange={handleChange}
				className="form__input"
			/>
			<button className="form__button">Buscar</button>
		</form>
		)
}

export default React.memo(SearchForm)