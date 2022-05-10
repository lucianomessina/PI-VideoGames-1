import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {clearState, getDetail,getGenres} from'../actions/index';
import '../css/Detail.css'



function Detail() {
  const {id}=useParams()
  const dispatch=useDispatch();
  // const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])
  

  useEffect(()=>{
    dispatch(getDetail(id))
  //  setLoading(true)
  

    return ()=>{
      console.log('componente desmontado')
      console.log(clearState())
      dispatch(clearState())
    }
  },[dispatch,id])
  

  const videogame=useSelector(state=>state.videogame);

  const {name,
    Genres,
    genres,
    background_image,
    rating,released,
    platforms,
description}=videogame
const genre=genres? genres?.map(e=>e.name): Genres?.map(e=>e.name)
console.log(videogame)
console.log('platafotmas:',platforms)

const platform=platforms?.map(e=>
  e.platform? e.platform.name: e)
console.log(platforms)
// console.log(genre)

  return (<div className='fondo-detail'>
        
          
        <div className='titulo-detail'>
          <h2>{name}</h2>
        </div>
    <div className='container-1'>
      <div className='container-2'>
        <div  className='img-center'>
        <img className='img-detail' alt={'https://media.gcflearnfree.org/content/5ccc48c7e5c6c4116cbd9df7_05_03_2019/consolasjuegos-01_xl.png'} src={background_image}/>

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
        
          </div>
        <div>
        <br/>
          <h4 className='plataforma'>Description</h4>
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