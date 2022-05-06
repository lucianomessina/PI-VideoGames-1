import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Card.css'

export default function VgCard({name,id,background_image,genres}) {
    
  return (
      
    
    <Link to={'/home/'+id}>
  <div className='card'>
      {/* {console.log('hay: ',genres)} */}
          <div className='vgname'>

            <img className='imagen-card' alt={'https://www.google.com/search?q=doge&tbm=isch&ved=2ahUKEwjcpK3QxLr3AhUYFLkGHamDCzgQ2-cCegQIABAA#imgrc=OsiH2eGR--imaM'} width='420px' height='250px'src={background_image}/>
            <h3>{name}</h3>
            {/* <h4>{genres}</h4> */}
            {genres?.map((e)=>{
            return(<> <li key={genres.indexOf(e)+name}> {e} </li><br/></>)
            })}
            </div>


  </div>
      </Link>
  )
};