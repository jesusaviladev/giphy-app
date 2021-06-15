import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({children, onClose}) => {

	return (

		<div className="modal">
			
			<div className="modal__container">
				<p className="modal__title">Inicia sesión para añadir a favoritos</p>
				<button className="modal__button" onClick={onClose}>
					<i className="fa fa-times"></i>
				</button>

				{children}

			</div>

		</div>
		)
}

//usamos portal para renderizar la modal al lado del root del index.html
const ModalPortal = ({onClose, children}) => {
		
	return ReactDOM.createPortal(<Modal onClose={onClose}>
				{children}
			</Modal>,
			document.getElementById('modal-root'))

		
}

export default ModalPortal