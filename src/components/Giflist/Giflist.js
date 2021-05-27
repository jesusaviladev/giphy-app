import React from 'react';
import Gif from '../Gif/Gif.js';
import './Giflist.css';

export default function Giflist({gifs = []}){
	
	return (
		<>
			<div className="gifs-container">
	           {gifs.map(singleGifs => <Gif id={singleGifs.id} 
	           	title={singleGifs.title} 
	           	url={singleGifs.url} 
	           	key={singleGifs.id+Math.random()}></Gif>)}
	         </div>
         </>
          );
}