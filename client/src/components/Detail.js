import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {clearState, getDetail,getGenres} from'../actions/index';
import '../css/Detail.css'


function Detail() {
  const {id}=useParams()
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  useEffect(()=>{
    dispatch(getDetail(id))

    return ()=>{
      console.log('componente desmontado')
      console.log(clearState())
      dispatch(clearState())
    }
  },[dispatch,id])
  

  const videogame=useSelector(state=>state.videogame);

  const {name,
    genres,
    background_image,
    rating,released,
    platforms,
  createdVideoGame,
description}=videogame
const genre=genres?.map(e=>e.name)
const platform=platforms?.map(e=>e.platform.name)
console.log(platform)
// console.log(genre)

  return (<div className='fondo-detail'>
        <div className='titulo-detail'>
          <h2>{name}</h2>
        </div>
    <div className='container-1'>
      <div className='container-2'>
        <div  className='img-center'>
        <img className='img-detail' alt={'https://www.google.com/search?q=doge&tbm=isch&ved=2ahUKEwjcpK3QxLr3AhUYFLkGHamDCzgQ2-cCegQIABAA#imgrc=OsiH2eGR--imaM'} src={background_image}/>

        </div>
        <h4 className='titulo-rating'>⭐Rating: {rating}</h4>
        <h4 className='TituloFecha'>🗓Released: {released}</h4>
        <div>
        <div className='genres-1'>
        <h4>Genres:</h4>
        {genre?.join(',  ')}
        </div>
        </div>
        <div className='platforms-1'>

        <h4 className='plataforma'>Platforms:</h4>
        {platform?.join(',  ')}
        {/* {createdVideoGame? platforms.map(e=>{
          return(<li key={platforms.indexOf(e)}>{e}</li>
          
          )
        }) :platforms && platforms.map(p=>{
          return(
            <li key={p.platform.id}>{p.platform.name}</li>
            )
          })} */}
          </div>
        <div>
        <br/>
          <p
                  className="Descripcion-Detalle"
                  dangerouslySetInnerHTML={{ __html:description }}
                />
          </div>
      </div>

    </div>
    
  
  </div>
  )
}

export default Detail;