import homeStateInit from '../../state/home/index'
import homeActionType from '../../actionType/home/index'

  
export function slide_listReducer (state=homeStateInit,{type,payload}) {
   // console.log(payload)
   state = JSON.parse(JSON.stringify(state))
    if(type === homeActionType.UP_SLIDE){
     
      state.slide_list = payload
    }
    // console.log( state )
   return state
   
}

export function classify_listReducer (state=homeStateInit,{type,payload}) {
  
   state = JSON.parse(JSON.stringify(state))
    if(type === homeActionType.UP_ClASSIFY){
     
      state.classify_list = payload
    }
    // console.log( state )
   return state
   
}

export function vipIndexReducer (state=homeStateInit,{type,payload}) {
  
  state = JSON.parse(JSON.stringify(state))
   if(type === homeActionType.UP_VIPINDEX){
    
     state.vipIndex = payload
   }
  // console.log( state )
  return state
  
}


export function  hotsRecommendListReducer (state=homeStateInit,{type,payload}) {
  
  state = JSON.parse(JSON.stringify(state))
   if(type === homeActionType.UP_HOTS){
    
     state.hotsRecommendList = payload
   }
  // console.log( state )
  return state
  
}