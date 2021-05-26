import React from 'react'
import { Link } from 'wouter'
import './Categories.css'

const Categories = ({terms, name})=> {
	return (
		<article className="categories">
			<h2>{name}</h2>
		    <ul className="categories__list">
		    	{
		    	//renderizamos cada componente de gif segun el array popular
		    	terms.map( term => {
		    		return (
		    			<li key={term + Math.random()}>
		    				<Link to={`/search/${term}`} className="categories__link">{term}</Link>
		    			</li>
		    			)
		    	})
		    	}
		    </ul>

		</article>
		);
}

export default Categories