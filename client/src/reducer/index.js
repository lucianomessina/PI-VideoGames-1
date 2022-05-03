import {GET_VG }from '../actions/index';



const initialState= {
    videogames : [],
    videogamescopy:[],
    genres:[],
    videogame:{}
}
export default function rootReducer(state=initialState,action){
    switch (action.type){
        case GET_VG:
            return{
                ...state,
                videogames: action.payload,
                videogamescopy:action.payload

            }
            case 'get_by_id':{
                return{
                    ...state,
                videogame:action.payload}
            }
            case 'get_genres':{
                return{
                    ...state,
                    genres:action.payload
                }
                
            }
            case'get_by_name':{
                return{
                    ...state,
                    videogames:action.payload
                }
            }
            case 'clear_state':{
                return{
                    ...state,
                    videogame:{}
                }
            }
                case 'filter_by_genre':{
                    const allvg=state.videogamescopy
                    const filteredVg=action.payload==='All'? allvg: allvg.filter(game=>game.genres.includes(action.payload))
                    return{
                        ...state,
                        videogames:filteredVg
                    }
            }
            default: return state;
    }
}



