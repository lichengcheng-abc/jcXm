import libraryActionType from "../../actionType/library";
import libraryState from "../../state/library";

export function the_pageIndex(state = libraryState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if( type === libraryActionType.GET_PAGEINDEX){
    state.pageIndex = payload.pageIndex
  }
  return state
}

export function the_library_nav(state = libraryState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === libraryActionType.GET_LIBRARY_NAV){
    state.libraryNav = payload
  }
  return state
}

export function the_library_map(state = libraryState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === libraryActionType.GET_LIBRARY_MAP){
    state.libraryMap = payload
  }
  return state
}

export function the_waterfall(state = libraryState,{type,payload}){
  state = JSON.parse(JSON.stringify(state))
  if(type === libraryActionType.GET_LIBRARYINIT){
    if(state.pageIndex < 2){
      state.libraryInit = payload
    }else{
      state.libraryInit = [...state.libraryInit, ...payload];
    }
    state.pageIndex++;
  }
  return state
}
// export default function (state = libraryState, { type, payload }) {
//   state = JSON.parse(JSON.stringify(state));
//   switch (type) {
//     case libraryActionType.GET_PAGEINDEX:
//       state.pageIndex = payload.pageIndex;
//       break;
//     case libraryActionType.GET_LIBRARY_NAV:
//       state.libraryNav = payload;
//       break;
//     case libraryActionType.GET_LIBRARY_MAP:
//       state.libraryMap = payload;
//       break;
//     case libraryActionType.GET_LIBRARYINIT:
//       if (state.pageIndex < 2) {
//         state.libraryInit = payload;
//       } else {
//         state.libraryInit = [...state.libraryInit, ...payload];
//       }
//       state.pageIndex++;
//       break;
//   }

//   return state;
// }

