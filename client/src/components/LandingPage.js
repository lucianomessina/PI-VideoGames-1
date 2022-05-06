import React from 'react'
import { Link } from 'react-router-dom';
import '../css/LandingPage.css'
function LandingPage() {
  return (
  <div className='fondo'>
    <div className='flex'>
      <div className='alig'>

        <h2>  🎮VIDEOGAMES🎮<br/>INDIVIDUAL PROYECT</h2>
        <Link to='/home'>
          <span>
        <button className='boton'>Home</button>
          </span>
        </Link>
      </div>

    </div>
  </div>
  )
}

export default LandingPage;