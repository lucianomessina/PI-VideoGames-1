import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (<>
    <h2>VIDEOGAMES INDIVIDUAL PROYECT.</h2>
    <Link to='/home'>
      <span>
    <button>Home</button>
      </span>
    </Link>
  </>
  )
}

export default LandingPage;