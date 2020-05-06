import searchStateInit from '../../state/search/index'
import searchActionType from '../../actionType/search/index'

export function searchListReducer (state=searchStateInit,{type,payload}) {
    // console.log(payload)
    state = JSON.parse(JSON.stringify(state))
     if(type === searchActionType.UP_SEARCH_LIST){
      
       state.searchList = payload
     }
     // console.log( state )
    return state
    
 }