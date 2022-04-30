import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar=()=> {
  return (
 <nav> 
    <li ><Link to='/'><span className='Nav-bar'>Landing Page</span></Link></li>
    <li ><Link to='/home'><span className='Nav-bar'>Home</span></Link></li>
    <li ><Link to='/create'><span className='Nav-bar'>Create Video Game</span></Link></li>
  </nav>


  )
}

export default NavBar