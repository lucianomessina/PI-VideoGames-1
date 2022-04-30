import React from 'react'
import { Link } from 'react-router-dom'

export default function VgCard({name,id,background_image,genres}) {
  return (
      
  <div>
      {/* {console.log('hay: ',genres)} */}
      <Link to={'/home/'+id}>
            <h3>{name}</h3>
            <h4>{genres}</h4>
            <img alt={'https://www.google.com/search?q=doge&tbm=isch&ved=2ahUKEwjcpK3QxLr3AhUYFLkGHamDCzgQ2-cCegQIABAA#imgrc=OsiH2eGR--imaM'} width='250px' height='125px'src={background_image}/>
            {/* {genres.map((e)=>{
               return( <li key={id}>{e}</li>)
            })} */}
      </Link>


  </div>
  )
};