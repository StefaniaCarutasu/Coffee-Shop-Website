/* eslint-disable no-unused-vars */
import { NavLink, Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import { Nav } from 'react-bootstrap'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

// styles
import './Navbar.css'
import Searchbar from '../Searchbar/Searchbar'

export default function Navbar({home, gallery, contact, login, signup, profile}) {

  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <>
        <div className="navbar" >
            <Nav>
                <NavLink exact to={home} className="brand" activeClassName="activeLink">
                  <h4>Home</h4>
                </NavLink>
                <NavLink to={gallery} className="brand" activeClassName="activeLink">
                  <h4>Gallery</h4>
                </NavLink>
                <NavLink to={contact} className="brand" activeClassName="activeLink">
                  <h4>Contact us!</h4>
                </NavLink>
                { !user && (
                  <>
                    <NavLink to={login} className="brand" activeClassName="activeLink">
                        <h4>Login</h4>
                    </NavLink>
                    <NavLink to={signup} className="brand" activeClassName="activeLink">
                      <h4>Sign up</h4>
                    </NavLink>
                  </>
                )}

                { user && (
                  <div className='right-nav'>
                    <li className='name'><h4>Hello, {user.displayName} </h4></li>
                    <NavLink to={login} className="brand" activeClassName="activeLink">
                        <h4>Profile</h4>
                    </NavLink>
                    <li className='brand' activeClassName="activeLink" onClick={logout}>
                      <h4>Logout</h4>
                    </li>
                  </div>
                )}
                
               

                  {/* <div className='auth'>
                  <NavLink to={login} className="brand" activeClassName="activeLink">
                    <h3>Login</h3>
                  </NavLink>
                  <NavLink to={signup} className="brand" activeClassName="activeLink">
                    <h3>Sign up</h3>
                  </NavLink>
                </div>*/}
                
                
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
