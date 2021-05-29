import { useEffect, useRef } from 'react'
//hook que cambia el titulo y meta description de la pagina

const useSEO = ({ title, description }) => {
	const previousTitle = useRef(document.title)
	const previousDescription = useRef(document.querySelector('meta[name="description"]')
		.getAttribute('content'))


	useEffect(()=>{
		const prevTitle = previousTitle.current

		if(title){
			document.title = `${title} | Giphy App`
		}

		return () => { document.title = prevTitle }

	},[title])

	useEffect(()=>{
		const prevDescription = previousDescription.current
		const metaDescription = document.querySelector('meta[name="description"]')

		if(description){
			metaDescription.setAttribute('content', description)
		}

		return () => { metaDescription.setAttribute('content', prevDescription) }

		
	}, [description])
}

export default useSEO