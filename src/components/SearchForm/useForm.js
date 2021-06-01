import { useReducer } from 'react'

//Hook para separar la logica del estado del componente de su renderizado

const useForm = ({initialKeyword, initialRating} = {}) => {

	const REDUCER_ACTIONS = {
		UPDATE_KEYWORD: 'update_keyword',
		UPDATE_RATING: 'update_rating'
	}

	const reducer = (state, action) => {
		//reducer para recibir el estado inicial y actualizar segun la accion
		switch(action.type){
			case REDUCER_ACTIONS.UPDATE_KEYWORD:
				return { ...state, keyword: action.payload }

			case REDUCER_ACTIONS.UPDATE_RATING: 
				return { ...state, rating: action.payload }

			default:
				return {
					...state
				}
		}
	}

	const [state, dispatch] = useReducer(reducer, {
		//estado inicial
		keyword: decodeURI(initialKeyword),
		rating: initialRating
	})

	return {
		keyword: state.keyword,
		rating: state.rating,
		updateKeyword: function(keyword) {
			dispatch({type: REDUCER_ACTIONS.UPDATE_KEYWORD, payload: keyword})
		},
		updateRating: function(rating) {
			dispatch({type: REDUCER_ACTIONS.UPDATE_RATING, payload: rating})
		}
	}
}

export default useForm