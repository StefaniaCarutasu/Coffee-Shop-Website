/* eslint-disable no-unused-vars */
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Nav } from 'react-bootstrap'

// styles
import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar'

export default function Navbar() {

  return (
    <div>
        <div className="navbar" >
            <Nav>
                <NavLink exact to="/" className="brand" activeClassName="activeLink">
                  <h3>Home</h3>
                </NavLink>
                <NavLink to="/gallery" className="brand" activeClassName="activeLink">
                  <h3>Gallery</h3>
                </NavLink>
                <NavLink to="/products" className="brand" activeClassName="activeLink">
                  <h3>Products</h3>
                </NavLink>
                <NavLink to="/login" className="brand" activeClassName="activeLink">
                  <h3>Login</h3>
                </NavLink>
                <NavLink to="/signup" className="brand" activeClassName="activeLink">
                  <h3>Sign up</h3>
                </NavLink>
                {/*<div className='searchbar'>
                    <Searchbar />
                    <Link to="/create">Create Recipe</Link>
                </div> */}
            </Nav>
        </div>
        <Logo />
    </div>
    
  )
}
