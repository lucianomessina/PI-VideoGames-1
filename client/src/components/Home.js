import React, { useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getVideoGames, getGenres,filterByGenre,filterByCreated,orderAscDesc,orderRating, rating4} from'../actions/index';
import VgCard from './VgCard';
import Paginado from './Paginado';
import '../css/Home.css'
import SearchBar from './SearchBar';

function Home() {
  const dispatch=useDispatch()
  const allVideoGames= useSelector((state)=>state.videogames);
  const genres=useSelector((state)=>state.genres)
  const [loading,setLoading]=useState(false)
  const [order,setOrder]=useState('')
  const [curretnPage,setCurrentPage]=useState(1)
  const [vgPerPage,/*setVgperpage*/]=useState(15)
  const indexOfLastVg=curretnPage*vgPerPage
  const indexOf1vg=indexOfLastVg-vgPerPage
  const curretnVg=allVideoGames.slice(indexOf1vg,indexOfLastVg)
  

  const paginado=(pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  useEffect(()=>{
   dispatch(getVideoGames());
   setLoading(true)
  },[dispatch])
 
  // const {name, id}=allVideoGames[0]
  // console.log(name, id)

  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  function handleFilterByCreated(e){
    e.preventDefault()
    dispatch(filterByCreated(e.target.value))
    setCurrentPage(1)

  }

  function ratingg(){
    
    dispatch(rating4())
  }




  const handleReload = () => {
    window.location.reload();
  };
  function handleFilterByGenre(e){
    e.preventDefault()
    dispatch(filterByGenre(e.target.value))
    setCurrentPage(1)
  }

  function handleOrderAscDesc(e){
    e.preventDefault()
    dispatch(orderAscDesc(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)

  }
  function handleOrderRating(e){
    e.preventDefault()
    dispatch(orderRating(e.target.value))
    setCurrentPage(1)
    setOrder(e.target.value)

  }

  return (<div  className='fondo-home'>
    <div>
    <div className='contenedor-filtro'>
    <h2 className='flexbox'>Videogames individual proyect</h2>
    </div>
    <div className='contenedor-filtro'>
      <button className='button' onClick={()=>handleReload()}>Refresh</button>
      <SearchBar/>
      {/* <button className='button' onClick={()=>ratingg()}>rating</button> */}

    </div>

    <div className='contenedor-filtro'>

    <div className="Selector">
    <h3>Order:</h3>
      <select onChange={e=>handleOrderAscDesc(e)}>
        <option hidden={true} value='none'>None</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </select>
    </div>
    <div className="Selector">
        <h3>Rating:</h3>
      <select onChange={e=>handleOrderRating(e)}>
      <option hidden={true} value='all'>all</option>
        <option value='may'>Best</option>
        <option value='men'>Worst</option>
      </select>
     </div> 
     <div className="Selector">
        
        <h4>Created/Existing:</h4>
      <select onChange={e=>handleFilterByCreated(e)}>
        <option value='all'>All</option>
        <option value='Created'>Created</option>
        <option value='Existing'>Existing</option>
      </select>
     </div>
     <div className="Selector" >
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
       </div>
     <div>
       <div className='contenedor-filtro'>
       {<Paginado 
       vgPerPage={vgPerPage}
       allVideogames={allVideoGames.length}
       paginado={paginado}
       />}

       </div>
       <div className='container'>
    {loading?(
      curretnVg.length>0?(
      curretnVg.map((el)=>{
        return( <VgCard
          id={el.id}
          key={el.id}
          name={el.name}
          background_image={el.background_image}
          genres={el.genres}
          rating={el.rating}
          description={el.description}
          />)
        })) :(
          <img className='loading' src='https://blog.lootcrate.com/wp-content/uploads/2018/02/pacman_ghosts_header.gif' alt='client\src\fondo-create.jpg'/>
        )):
        <img className='loading' src='https://blog.lootcrate.com/wp-content/uploads/2018/02/pacman_ghosts_header.gif' alt='client\src\fondo-create.jpg'/>

      }
      </div>
      </div>
    </div>  
    <div className='contenedor-filtro'>

    {<Paginado 
       vgPerPage={vgPerPage}
       allVideogames={allVideoGames.length}
       paginado={paginado}
       curretnPage={curretnPage}
       />}
    </div>
  </div>
  )
}

export default Home