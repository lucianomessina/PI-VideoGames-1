import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideoGames } from '../actions';
import '../css/SearchBar.css'
export default function SearchBar() {
    const dispatch=useDispatch();
    const [name,setName]=useState('')  
  
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        // console.log(name)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchVideoGames(name))
        setName('')
    }

    return (
    <form>
        <div>
        <input
        className="searchbar"
        type='text'
        placeholder='Search Videogame...'
        onChange={e=>handleInputChange(e)}
        />

        </div>
        <button type='submit' className="button" onClick={e=>handleSubmit(e)}>Search</button>
    </form>
  )
}

