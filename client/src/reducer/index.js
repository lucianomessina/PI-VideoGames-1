import {GET_VG }from '../actions/index';



const initialState= {
    videogames : [],
    videogamescopy:[],
    genres:[],
    videogame:{}
}
export default function rootReducer(state=initialState,action){
    switch (action.type){
            case 'delete_videogame':{
                return{
                    ...state}
            }
            case 'post_videogame':{
                return{
                    ...state}
            }
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
            case 'clear_vg':{
                return{
                    ...state,
                    videogames:[]
                }
            }
            case 'filter_by_genre':{
                    const allvg=state.videogamescopy
                    const filteredVg=action.payload==='All'? allvg: allvg.filter(game=>game.genres?.includes(action.payload))
                    return{
                        ...state,
                        videogames:filteredVg
                    }
            }
            case 'filter_by_created':{
                const allvg=state.videogamescopy
                const filteredVg=action.payload==='Created'?allvg.filter(v=>v.createdVideoGame):allvg.filter(v=>!v.createdVideoGame)
                // console.log(filteredVg)
                return{
                    ...state,
                    videogames:action.payload==='All'?allvg:filteredVg
                }
            }
            case 'order_by_rating':{
                const allvg=state.videogamescopy
                var orderedVg=allvg.sort(function(a,b){
                    if(a.rating >b.rating){
                        return 1;
                    }
                    if(a.rating <b.rating){
                        return -1;
                    }
                    return 0
                })
                orderedVg=action.payload==='men'?orderedVg:orderedVg.reverse()
                return{
                    ...state,
                    videogames:orderedVg
                }
                
            }
            case 'order_asc_desc':{
                const allvg=state.videogamescopy
                console.log(allvg)
                var orderedVg1=allvg.sort(function(a,b){
                    if(a.name >b.name){
                        return 1;
                    }
                    if(a.name <b.name){
                        return -1;
                    }
                    return 0
                })
                console.log(orderedVg1)
                orderedVg1=action.payload==='asc'?orderedVg1: orderedVg1.reverse()
                return{
                    ...state,
                    videogames:orderedVg1
                }
            }
            case 'rating4':{
                const allvg=state.videogamescopy;
                const filteredVg=allvg.filter(v=>v.rating>=4)
                return{
                    ...state,
                    videogames:filteredVg
                }
            }
            default: return state;
    }
}



