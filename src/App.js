import React from 'react';
import './App.css';
import Home from './pages/Home/Home.js'
import Search from './pages/Search/Search.js'
import Detail from './pages/Detail/Detail.js'
import LoginPage from './pages/Login/LoginPage.js'
import RegisterPage from './pages/Register/RegisterPage.js'
import Navbar from './components/Navbar/Navbar.js'
import { Link, Route, Switch, Redirect } from "wouter"
import  { GifsContextProvider } from './context/GifsContext.js'
import { UserContextProvider } from './context/UserContext.js'

const App = () => {
  //Renderizamos la aplicacion con un link y 3 rutas que renderizan componentes

  return (
        <>   
          <UserContextProvider>
            <header className="header">
              
              <Navbar/>

              <Link to="/" className="header__link">
                    <h1 className="header__title">Giphy 
                      <span className="header__title--color"> app</span>
                    </h1> 
                    <p className="header__subtitle">By @jesusaviladev</p>
              </Link>

            </header>

            <main className="app">

              <GifsContextProvider>

              <Switch>

            	  <Route path="/" component={Home}/>

                <Route path="/search/:keyword/:rating?" component={Search}/>

                <Route path="/gif/:id" component={Detail}/>

                <Route path="/login" component={LoginPage}/>

                <Route path="/register" component={RegisterPage}/>

                <Route path="/404" component={()=> <h2>404 Error :(</h2>}/>

                <Route>
                  <Redirect to="/404"></Redirect>
                </Route>

              </Switch>

              </GifsContextProvider>

          </main>

          </UserContextProvider>
        </>
        );
  
}

export default App;
