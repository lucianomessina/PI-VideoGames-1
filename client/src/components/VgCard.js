import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Card.css'



export default function VgCard({name,id,background_image,genres}) {
    
  return (
      
    
    <Link to={'/home/'+id}>
  <div key={id} className='card'>
      {/* {console.log('hay: ',genres)} */}
          <div className='vgname'>

            <img className='imagen-card' alt='client\src\fondo-create.jpg' width='420px' height='250px'src={background_image ||'https://blog.ida.cl/wp-content/uploads/sites/5/2020/05/ida-uxvideojuegos-blog-768x551.png'}/>
            <h3>{name}</h3>
            {/* <h4>{genres}</h4> */}
            {genres?.map((e)=>{
            return(<> <li key={genres.indexOf(e)+name}> {e} </li></>)
            })}
            </div>


  </div>
      </Link>
  )
};