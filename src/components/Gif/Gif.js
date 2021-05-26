import React from 'react';
import './Gif.css'
import {Link} from 'wouter';

 function Gif({title, id, url}){

	return (
		<Link to={`/gif/${id}`} className="app__link">
			<img src={url} alt={title} className='image'/>
		</Link>
                );
}

export default React.memo(Gif)