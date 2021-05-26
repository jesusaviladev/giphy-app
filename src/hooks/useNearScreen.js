import { useRef, useEffect, useState} from 'react'

const useNearScreen = ({distance = '100px', externalRef = null, once = true} = {}) => {

	const [isNearScreen, setIsNearScreen] = useState(false)
	const fromRef = useRef()

	useEffect(()=>{
		const element = externalRef ? externalRef.current : fromRef.current

		const onChange = (entries) => {
			const element = entries[0]

			if(element.isIntersecting){
				setIsNearScreen(true)
				once && observer.disconnect()
			}

			else {
				!once && setIsNearScreen(false)
			}
		}

		//usamos intersection observer para determinar si hay interseccion
		const observer = new IntersectionObserver(onChange, {
			rootMargin: distance
		})

		if(element) observer.observe(element)

		return () => observer.disconnect()
	})

	return {isNearScreen, fromRef}
}

export default useNearScreen