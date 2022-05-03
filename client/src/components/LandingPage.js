import React from 'react'
import { Link } from 'react-router-dom';
import '../css/LandingPage.css'
function LandingPage() {
  return (<div className='fondo'>
    <h2>VIDEOGAMES INDIVIDUAL PROYECT.</h2>
    <Link to='/home'>
      <span>
    <button>Home</button>
      </span>
    </Link>
  </div>
  )
}

export default LandingPage;