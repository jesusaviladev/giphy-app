import React, { useState, useCallback } from 'react'
import './Fav.css'
import useUser from '../../hooks/useUser.js'
import ModalPortal from '../Modal/Modal.js'
import Login from '../Login/Login.js'

const Fav = ({ id }) => {

	const { isLogged, favs, addFav } = useUser()
	const [ showModal, setShowModal ] = useState(false)
	
	const isFaved = favs.some(favId => favId === id)

	const handleClick = () => {

		if(!isLogged) setShowModal(true)

		else addFav({ id })
	}

	const handleCloseModal = useCallback(()=>{
		setShowModal(false)
	}, [])

	const handleLogin = useCallback(()=>{
		setShowModal(false)
	}, [])

	const classForButton = isFaved ? 'fas fa-heart' : 'far fa-heart'

	return (

		<>
			{
				showModal ? <ModalPortal onClose={handleCloseModal}>{<Login onLogin={handleLogin}/>}</ModalPortal>
				: null
			}

			<button className="fav" onClick={handleClick}>
				<i className={classForButton}></i>
			</button>
		</>
		)
}

export default React.memo(Fav)