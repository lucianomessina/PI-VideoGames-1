import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {clearState, getDetail,getGenres} from'../actions/index';


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
  console.log(description)
  return (<div>

    <h2>{name}</h2>
    <img alt={'https://www.google.com/search?q=doge&tbm=isch&ved=2ahUKEwjcpK3QxLr3AhUYFLkGHamDCzgQ2-cCegQIABAA#imgrc=OsiH2eGR--imaM'} width='250px' height='125px'src={background_image}/>
    {genres?.map(g=>{
      return(<li key={g.id}>{g.name}</li>)
    })}
    <p>Rating: {rating}</p>
    <p>Released: {released}</p>
    <p>Plataformas:</p>
    {createdVideoGame? platforms.map(e=>{
      return(<li key={platforms.indexOf(e)}>{e}</li>

      )
    }) :platforms && platforms.map(p=>{
      return(
        <li key={p.platform.id}>{p.platform.name}</li>
      )
    })}
    <div>
    <br/>
      <p
              className="Descripcion-Detalle"
              dangerouslySetInnerHTML={{ __html:description }}
            />
      </div>
    
  
  </div>
  )
}

export default Detail;