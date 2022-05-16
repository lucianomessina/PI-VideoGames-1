import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='fondo'>
      <div className>
      <button className='button'><Link to='/home'> Go Home</Link> </button>
      </div>
      <h1 className='titulo-detail'>About me</h1>
      <div className='containerCv'> 
      <p className='titulo-rating'><strong>Hi!, I'm Marco Lopez Farias from Argentina and this is my personal project for Henry bootcamp!. I made all parts of this websiteusing Node JS, Express JS, Sequelize, React JS, Redux and CSS </strong></p>
      <br/>
      <p className='titulo-rating'><strong>If you want to contact me, links below!</strong></p>
      <br/>
      <br/>
      <div className='img-center'>
        
      <a 
            rel='noreferrer'
            href='https://www.linkedin.com/in/marco-lopez-farias-a54487231/'
            target="_blank"
            
            >
            <img alt="linkedin" src='https://raw.githubusercontent.com/jaider012/video-games-Pi/main/client/src/img/linkedinLOGO.png' width='100px' height='100px'/>
          </a>
          <a
            rel='noreferrer'
            href='https://github.com/MarcoLopezf'
            target="_blank"
            
            >
            <img alt="github" src='https://cdn-icons-png.flaticon.com/512/5968/5968866.png' width='100px' height='100px'/>
          </a>
            </div>

      </div>
    </div>
  
  )
}

export default About