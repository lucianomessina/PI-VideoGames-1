import {GET_VG }from '../actions/index';



const initialState= {
    videogames : [],
    genres:[]
}
export default function rootReducer(state=initialState,action){
    switch (action.type){
        case GET_VG:
            return{
                ...state,
                videogames: action.payload
            }
            case 'getvg_byid':{
                break;
            }
            case 'get_genres':{
                return{
                    ...state,
                    genres:action.payload
                }
                
            }
            default: return state;
    }
}



