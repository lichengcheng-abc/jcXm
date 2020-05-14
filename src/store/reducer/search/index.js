import searchStateInit from '../../state/search/index'
import searchActionType from '../../actionType/search/index'


export function searchListReducer (state=searchStateInit,{type,payload,pageNo}) {
 
    
    state = JSON.parse(JSON.stringify(state))
     if(type === searchActionType.UP_SEARCH_LIST){
      if(pageNo < 2){
     
        state.searchList = payload
        
      }else{
        
        state.searchList = [...state.searchList, ...payload];
      }

      // 这里不能在这里改变页数 不能在store 因为这个引发请求的事件会一直有进行的 不能说变一个搜索词就改变这个页数
     }
    //  console.log( state.searchList )
    return state
    
 }


 export function hotSearchReducer (state=searchStateInit,{type,payload,pageNo}) {
 
    
  state = JSON.parse(JSON.stringify(state))
   if(type === searchActionType.UP_HOT_SEARCH){
   
      state.hotSearchList = payload
   }
  return state
  
}

