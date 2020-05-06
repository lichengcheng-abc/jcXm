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


export function  wtListReducer (state=homeStateInit,{type,payload}) {
  
  state = JSON.parse(JSON.stringify(state))
   if(type === homeActionType.UP_WTLIST){
    
     state.wtList = payload
   }
  // console.log( state )
  return state
  
}


export function  showListReducer (state=homeStateInit,{type,payload}) {
  state = JSON.parse(JSON.stringify(state))

  if(type === homeActionType.UP_SHOWLIST){
    // console.log(payload)
    if (state.pageIndex < 2) {
      state.showList = payload;
    } else {
      state.showList = [...state.showList, ...payload];
    }
    // 这个的if else  是解决此时若从其他地方跳转过来此时就是还是重新是一条数据了 而不是接着刚才的拼接

    state.pageIndex++;
  
    // state = JSON.parse(JSON.stringify(state))
    // // state.pageIndex ++ 
    //  if(type === homeActionType.UP_SHOWLIST){
      
    //    state.showList = payload
    //  }
    // // console.log( state )
  }
  
  return state
  
}

