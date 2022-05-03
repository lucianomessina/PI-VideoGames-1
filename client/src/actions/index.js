import axios from 'axios';


 export const  GET_VG='get_videogames';
 export const  GET_GENRES='get_genres';
 export const  GET_BY_ID='get_by_id';
 export const  GET_BY_NAME='get_by_name';
 export const CLEAR_STATE='clear_state';
 export const FILTER_BY_GENRE='filter_by_genre'

   
export function filterByGenre(payload){
    return{
        type:FILTER_BY_GENRE,
        payload
    }
}

export function clearState(){
    return {
        type:CLEAR_STATE
       
    }
}


export function getDetail(id){
    return async function(dispatch){
        const json =await axios.get('http://localhost:3001/videogames/'+id)
        return dispatch({
            type:'get_by_id',
            payload:json.data
        })
    }
}

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

export function searchVideoGames(name){
    return async(dispatch)=>{
        const json= axios.get('http://localhost:3001/videogames?name='+name)
        return dispatch({
            type:'get_by_name',
            payload:json.data
        })
    }
}