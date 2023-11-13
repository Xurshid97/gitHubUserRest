import React from 'react'
import Home from './Home'
import UserDetails from './UserDetails'
import { NavLink } from 'react-router-dom'

function Navbar() {
  let isActiveLink = ({isActive})=> {
    return({
      fontWeight: isActive ? 'bold': 'normal',
      textDecoration: isActive ? 'none': 'underline'
    })
  }
  return (
    <nav className='navbar'>
        <NavLink to='/' style={isActiveLink}>Home</NavLink>
    </nav>
  )
}

export default Navbar