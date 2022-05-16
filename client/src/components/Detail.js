import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {clearState, clearVg, DeleteVideoGame, getDetail,getGenres} from'../actions/index';
import '../css/Detail.css'



function Detail() {
  const navigate=useNavigate()
  const {id}=useParams()
  const dispatch=useDispatch();
  // const [loading,setLoading]=useState(true)
  
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

  const handleDelete= ()=>{
    console.log('boton delete', id)
    dispatch(DeleteVideoGame(id))
    alert('Videogame Deleted.')
    navigate('/')
    dispatch(clearVg())
  }
  

  const videogame=useSelector(state=>state.videogame);

  const {name,
    Genres,
    genres,
    background_image,
    rating,released,
    platforms,
description,
createdVideoGame
}=videogame
const genre=genres? genres?.map(e=>e.name): Genres?.map(e=>e.name)
console.log(videogame)
console.log('platafotmas:',platforms)

const platform=platforms?.map(e=>
  e.platform? e.platform.name: e)
console.log(platforms)
// console.log(genre)

  return (<div className='fondo-detail'>
        
        {createdVideoGame &&<div className='titulo-detail'>
          <button className='button' onClick={()=>handleDelete(id)}>Delete Game</button>
        </div>}
        <div className='titulo-detail'>
          <h2>{name}</h2>
        </div>
    <div className='container-1'>
      <div className='container-2'>
        <div  className='img-center'>
        {(background_image || createdVideoGame)?<img className='img-detail' alt={'https://media.gcflearnfree.org/content/5ccc48c7e5c6c4116cbd9df7_05_03_2019/consolasjuegos-01_xl.png'} src={background_image ||'https://blog.ida.cl/wp-content/uploads/sites/5/2020/05/ida-uxvideojuegos-blog-768x551.png'}/>
:<img src='https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif' alt={'https://media.gcflearnfree.org/content/5ccc48c7e5c6c4116cbd9df7_05_03_2019/consolasjuegos-01_xl.png'}/>}
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