import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres, postVideoGame } from '../actions'
import '../css/CreateVg.css'


function validate(state){
  const error={}

  if(!state.name){
    error.name='The name of the Videogame is required.'
  }else if(state.name.length<5){
    error.name='The length of the videogame name has to be more than 5'
  }
  if(!state.description){
    error.description='the description is required'
  }
  if(!state.rating){
    error.rating='The rating is required'
  }else if(state.rating<0 || state.rating >5){
    error.rating='The rating has to be a value beetwen 0 and 5'
  }
  if(state.genres.length==0){
    error.genres='Should have at least 1 genre'
  }
  if(state.platforms.length==0){
    error.platforms='Should select at least 1 platform'

  }

  return error
}


export default function CreateVG() {

  let plataformss = [
    "PC","PlayStation","Xbox","Nintendo Switch","iOS", "Android","Nintendo","PS Vita","PSP","Wii","Game Boy","Atari","SEGA","PS5","PS4","PS3","PS2","PS1",
  ];
  const [button,setButton]=useState(false)
  const dispatch=useDispatch()
  const genres=useSelector(state=>state.genres)
  const [input,setInput]=useState({
    name:'',
    description:'',
    rating:'',
    released:'',
    genres:[],
    platforms:[]
  })
  const [error,setError]=useState({
    name:'',
    description:'',
    rating:'',
    genres:''
  })
useEffect(()=>{
  dispatch(getGenres())
},[dispatch])

const handleChange=(e)=>{
  e.preventDefault()
    setInput(prevState=>{
      const newState={
      ...input,
      [e.target.name]:e.target.value
    };

    setError(validate(newState))
  
  return newState
  })
  if(Object.keys(error).length === 0){
  setButton(true)}
}
const handleSelectP=(e)=>{
  e.preventDefault()
  if(!input.platforms.includes(e.target.value)){
    setInput({
      ...input,
      platforms:[...input.platforms,e.target.value]
    })}else{
      console.log('Plataforma ya agregada.')
    }
}
const handleSelect=(e)=>{
  e.preventDefault()
  if(!input.genres.includes(e.target.value)){
  setInput({
    ...input,
    genres:[...input.genres,e.target.value]
  })}
}
const handleDeleteGenre=(e)=>{
  setInput({
    ...input,
    genres:input.genres.filter((g) => g!==e )
  })
}
const handleDeletePlat=(e)=>{
  setInput({
    ...input,
    platforms:input.platforms.filter((g) => g!==e )
  })
}


const handleSubmit=(e)=>{
  e.preventDefault()
  dispatch(postVideoGame(input))
  setInput({
    name:'',
    description:'',
    rating:'',
    released:'',
    genres:[],
    platforms:[]
  })
  alert('Videogame created!')
}

  return (
    <div className='fondo'>
      <div>
      <Link to='/home'><button className='back-button'>Back to Home</button></Link>

      </div>
      <h1 className='title-create'>Create your own Videogame!</h1>
     <div className='containerCv'>
      <form onSubmit={e=>handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <input
          className={error?.name && 'danger'}
          onChange={e=>handleChange(e)}
          type='text'
          value={input.name}
          name='name'
          />
          <span className='error'>{error?.name ||''}</span>
        </div>
        
        <div>
          <label>Description: </label>
          <textarea
          onChange={e=>handleChange(e)}
          type='text'
          value={input.description}
          name='description'
          />
          <span className='error'>{error?.description ||''}</span>
        </div>
        
        <div>
          <label>Rating: </label>
          <input
          onChange={e=>handleChange(e)}
          type='number'
          value={input.rating}
          name='rating'
          />
          <span className='error'>{error?.rating ||''}</span>

          </div>
        

          <div>
          <label>Released: </label>
          <input
          onChange={e=>handleChange(e)}
          type='datetime'
          value={input.released}
          name='released'
          />
          </div>
          <div>
          <label>Background_image: </label>
          <input
          onChange={e=>handleChange(e)}
          type='text'
          value={input.background_image}
          name='background_image'
          placeholder='Image URL '
          />
          </div>
          <br/>
          <div>
            <label>Genres:</label>
            <select onChange={e=>handleSelect(e)}>
              <option hidden key={0}>select...</option>
            {genres.map(g=>{
              return(<option  key={g.id} value={g.name}>{g.name}</option>
            )})}
            </select> 
          <span className='error'>{error?.genres ||''}</span>

          </div>
          <br/>
          <div>
          <label>Platforms:</label>
            <select onChange={e=>handleSelectP(e)}>
            <option hidden>select...</option>
          {plataformss.map(p=>{
            return(
              
              <option
              
              value={p}
              name='platforms'
              key={plataformss.indexOf(p)}
              >{p}</option>
              
              )
            })}
            </select>
          <span className='error'>{error?.platforms ||''}</span>

          </div>

          
      </form>
            <div>
          <br/>
              <span>Genres selected:</span>
                {input.genres.map(g=>{
                  return (<div key={input.genres.indexOf(g)}>
                    <p key={input.genres.indexOf(g)}>{g}</p><button onClick={()=>handleDeleteGenre(g)}>x</button>
                  </div>
                  )
                })}
            </div>
            <br/>
            <div>
              <span>Platforms selected:</span>

              {input.platforms.map(p=>{
                return (<div key={p}>
                  <p key={p}>{p}</p>
                <button onClick={()=>handleDeletePlat(p)}>x</button>
                <hr size='2px'/>
                </div>)
              })}
            </div>
  <button type='submit' className='submit' disabled={!button}>Create Videogame</button>
        </div>
      </div>
  )
}

