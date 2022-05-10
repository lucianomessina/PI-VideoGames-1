import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='fondo'>
      <div className>
      <button className='button'><Link to='/home'> Go Home</Link> </button>
      </div>
      <div className> 
      <h1 className>About</h1>
      <p className><strong>Hi!, I'm Marco Lopez Farias from Argentina and this is my personal project for Henry bootcamp!. I made all parts of this websiteusing Node JS, Express JS, Sequelize, React JS, Redux and CSS </strong></p>
      <p className><strong>If you want to contact me, links below!</strong></p>
      <a 
            rel='noreferrer'
            href='https://www.linkedin.com/in/marco-lopez-farias-a54487231/'
            target="_blank"
            
          >
            <img alt="linkedin" src width='300px' height='200px'/>
          </a>
          <a
            rel='noreferrer'
            href='https://github.com/MarcoLopezf'
            target="_blank"
            
          >
            <img alt="github" src width='300px' height='200px'/>
          </a>

      </div>
    </div>
  
  )
}

export default About