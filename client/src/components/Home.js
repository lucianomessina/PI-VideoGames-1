import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getVideoGames, getGenres,filterByGenre} from'../actions/index';
import VgCard from './VgCard';
import Paginado from './Paginado';
import '../css/Home.css'

function Home() {
  const dispatch=useDispatch()
  const allVideoGames= useSelector((state)=>state.videogames);
  const genres=useSelector((state)=>state.genres)
  
  const [curretnPage,setCurrentPage]=useState(1)
  const [vgPerPage,setVgPerPage]=useState(15)
  const indexOfLastVg=curretnPage*vgPerPage
  const indexOf1vg=indexOfLastVg-vgPerPage
  const curretnVg=allVideoGames.slice(indexOf1vg,indexOfLastVg)
  

  const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  useEffect(()=>{
   dispatch(getVideoGames());
  },[dispatch])
  console.log(allVideoGames[0])
  // const {name, id}=allVideoGames[0]
  // console.log(name, id)

  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  function handleFilterByGenre(e){
    e.preventDefault()
    dispatch(filterByGenre(e.target.value))
    setCurrentPage(1)
  }

  return (<div  className='fondo'>
    <h2>Videogames individual proyect</h2>
    <Link to='/create'>Crear Videojuego</Link>
    <div>
      <input
      type='text'
      id='title'
      
      />
    </div>
    <div>
      <select>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>
    </div>
    <div>
        <h3>Rating:</h3>
      <select>
        <option value='may'>Best</option>
        <option value='men'>Worst</option>
      </select>
     </div> 
     <div>
        <h3>Filter By:</h3>
        <h4>Created/Existing:</h4>
      <select>
        <option value='all'>All</option>
        <option value='Created'>Created</option>
        <option value='Existing'>Existing</option>
      </select>
     </div>
     <div>
       <h4>Genre:</h4>
          <select onChange={e=>handleFilterByGenre(e)}>
            <option value="todos">
              All
            </option>
            {genres.map((e) => {
              return (
                <option key={e.id}  value={e.name}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div> 
     <div>
       {<Paginado 
       vgPerPage={vgPerPage}
       allVideogames={allVideoGames.length}
       paginado={paginado}
       />}
       <div className='container'>

    {
      curretnVg?.map((el)=>{
        return( <VgCard
          id={el.id}
          key={el.id}
          name={el.name}
          background_image={el.background_image}
          genres={el.genres}
          rating={el.rating}
          />)
        })
      }
      </div>
    </div>  


  </div>
  )
}

export default Home