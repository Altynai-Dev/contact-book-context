import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h3>Navbar</h3>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/add'>Add contact</NavLink>
    </div>
  )
}

export default Navbar