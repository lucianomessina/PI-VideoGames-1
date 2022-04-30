import axios from 'axios';


 export const  GET_VG='get_videogames';
 export const  GET_GENRES='get_genres';
 export const  GET_BY_ID='getvg_byid';
   

export function getVideoGames(){
    return async function(dispatch){
       
            const json= await axios.get('http://localhost:3001/videogames');
            const data=json.data
            
            return dispatch({
                type:'get_videogames',
                payload:data
            })
             
    }
}

export function getGenres(){
    return async function(dispatch){
     
            var json=await axios.get('http://localhost:3001/genres');
            return dispatch({
                type:'get_genres',
                payload:json.data
            })
      
    }
}