import React from 'react';
import './App.css';
import Home from './pages/Home/Home.js'
import Search from './pages/Search/Search.js'
import Detail from './pages/Detail/Detail.js';
import { Link, Route } from "wouter"
import  { GifsContextProvider } from './context/GifsContext.js'

const App = () => {
  //Renderizamos la aplicacion con un link y 3 rutas que renderizan componentes

  return (

          <main className="app">
          	  <Link to="/">
                  <h1 className="app__title">Giphy 
                    <span className="app__title--color">app</span>
                  </h1> 
                  <p className="app__subtitle">By @jesusaviladev</p>
              </Link>
              
              <GifsContextProvider>

            	  <Route path="/" component={Home}/>

                <Route path="/search/:keyword" component={Search}/>

                <Route path="/gif/:id" component={Detail}/>

                <Route path="/404" component={()=> <h2>404 Error :(</h2>}/> 

              </GifsContextProvider>
          </main>

        );
  
}

export default App;
