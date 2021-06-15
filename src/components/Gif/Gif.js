import React from 'react';
import './Gif.css'
import {Link} from 'wouter';
import Fav from '../Fav/Fav.js'

 function Gif({title, id, url}){

	return (
		<div className="gif" data-id={title}>
			<Fav id={id}/>
			<Link to={`/gif/${id}`} className="app__link">
				<img src={url} alt={title} className='image'/>
			</Link>
		</div>
                );
}

export default React.memo(Gif)