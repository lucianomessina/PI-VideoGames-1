import React from 'react'
import { Link } from 'react-router-dom'
import '../css/NavBar.css'

const NavBar=()=> {
  return (
 <nav className='Nav-Bar'> 
  <ul className='ul-nav'>
    <li className='li-nav' ><Link className='nav-item' to='/'><span>🎮Landing Page</span></Link></li>
    <li className='li-nav'><Link className='nav-item' to='/home'><span>🏠Home</span></Link></li>
    <li className='li-nav'><Link className='nav-item' to='/create'><span>🕹Create Video Game</span></Link></li>
    <li className='li-nav'><Link className='nav-item' to='About'> 💻About</Link></li>
  </ul>
  </nav>


  )
}

export default NavBar