/* eslint-disable no-unused-vars */
import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Logo from './components/Logo';
import './App.css';


// page components
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Products from './pages/Products'

import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';


function App() {
  //const logo_src = "./logo1.png";
  const home = '/';
  const gallery = '/gallery';
  const products = '/products';
  const login = '/login';
  const signup = '/signup';

  return (
    <div className="App">
      <BrowserRouter>
      
      <div >
        <Navbar/>
      </div>
      
      
        <Switch>
          <Route exact path={home}>
            <Home />
          </Route>

          <Route path={products}>
            <Products />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path={login}>
            <Login />
          </Route>

          <Route path={signup}>
            <SignUp />
          </Route>

          <Route path={gallery}>
            <Gallery />
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
