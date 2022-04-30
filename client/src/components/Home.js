import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getVideoGames, getGenres} from'../actions/index';
import VgCard from './VgCard';

function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getVideoGames());
  },[dispatch])
  const allVideoGames= useSelector((state)=>state.videogames);
  console.log(allVideoGames[0].genres)
  // const {name, id}=allVideoGames[0]
  // console.log(name, id)

  useEffect(()=>{
    dispatch(getGenres());
  },[dispatch])

  return (<div>
    <h2>Esta es la home</h2>
    <Link to='/create'>Crear Videojuego</Link>
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
      <select>
        <option value='all'>All</option>
        <option value='Created'>Created</option>
        <option value='Existing'>Existing</option>
      </select>
     </div> 
     <div>
       {
        //  <VgCard name={name} id={id}/> 
       }
    {
      allVideoGames?.map((el)=>{
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
  )
}

export default Home