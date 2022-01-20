/* eslint-disable no-unused-vars */
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Nav } from 'react-bootstrap'

// styles
import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar'

export default function Navbar({home, gallery, contact, login, signup}) {

  return (
    <>
        <div className="navbar" >
            <Nav>
                <NavLink exact to={home} className="brand" activeClassName="activeLink">
                  <h3>Home</h3>
                </NavLink>
                <NavLink to={gallery} className="brand" activeClassName="activeLink">
                  <h3>Gallery</h3>
                </NavLink>
                <NavLink to={contact} className="brand" activeClassName="activeLink">
                  <h3>Contact us!</h3>
                </NavLink>
                <div className='login-signup'>
                  <NavLink to={login} className="brand" activeClassName="activeLink">
                    <h3>Login</h3>
                  </NavLink>
                  <NavLink to={signup} className="brand" activeClassName="activeLink">
                    <h3>Sign up</h3>
                  </NavLink>
                </div>
                
                {/*<div className='searchbar'>
                    <Searchbar />
                    <Link to="/create">Create Recipe</Link>
                </div> */}
            </Nav>
        </div>
        <Logo />
    </>
    
  )
}
