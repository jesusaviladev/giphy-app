import API_KEY from './config.js'

export default function getGifs({keyword = 'programming', limit = 15, page = 0} = {}){

	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=es`
    //Hacemos consulta a la API y devolvemos un array con los datos
	  return fetch(apiURL)
    .then(response => response.json())
    .then(res => {   	
      // console.dir(res)
      const {data = []} = res;
        if(Array.isArray(data)){
          const gifsArray = data.map( img => {
          const {images, title, id} = img
          
          const url = images.fixed_height_downsampled.webp ||
          images.fixed_height_downsampled.url
            
            return { title, id, url }
           })
           
           return gifsArray
        
    }
  })
    .catch(err => {
      console.log('Ocurrió un error de conexión al servidor: ', err)
      const gifsArray = []
      return gifsArray
    })
}

