import axios from 'axios';


export const  GET_VG='get_videogames';
export const  GET_GENRES='get_genres';
export const  GET_BY_ID='get_by_id';
export const  GET_BY_NAME='get_by_name';
export const CLEAR_STATE='clear_state';
export const CLEAR_VG='clear_vg';
export const FILTER_BY_GENRE='filter_by_genre'
export const FILTER_BY_CREATED='filter_by_created';
export const ORDER_ASC_DESC='order_asc_desc';
export const ORDER_BY_RATING='order_by_rating';
export const POST_VIDEOGAME='post_videogame';
export const DELETE_VIDEOGAME='delete_videogame';
export const RATING4='rating4';
 

export function rating4(payload){
    return{
        type:RATING4,
        payload
    }

}


export function orderRating(payload){
    return{
        type:ORDER_BY_RATING,
        payload
    }

} 

export function postVideoGame(payload){
    return async ()=>{
        const json= await axios.post('http://localhost:3001/videogames',payload)
        // console.log(json.data) 
        return {
            json
        }

    }

}
export function DeleteVideoGame(payload){
    return async (dispatch)=>{
        const json= await axios.delete('http://localhost:3001/videogames/'+payload)
        console.log(json.data) 
        return dispatch({
            type:DELETE_VIDEOGAME
        })

    }

}


 export function searchVideoGames(name){
     return async(dispatch)=>{
         try {
             const json=await axios.get('http://localhost:3001/videogames?name='+name)
             return dispatch({
                 type:'get_by_name',
                 payload:json.data
             })
         } catch (error) {
             console.log(error)
         }
     }
 }
 
 

 
export function orderAscDesc(payload){
    return{
        type:ORDER_ASC_DESC,
        payload
    }
}   

export function filterByCreated(payload){
    return{
        type:FILTER_BY_CREATED,
            payload
    }
}

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
export function clearVg(){
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
