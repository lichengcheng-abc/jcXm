import {
    combineReducers
} from 'redux'
// import {slide_listReducer,classify_listReducer} from './home/index';
import ticketDetail from '../reducer/ticketDetail';

import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer} 
from './home/index'
// const rootReducer = combineReducers({
//     goods:[]
// })

import theatreList from './theatreList'
import theaterDetail from './theaterDetail'

const rootReducer = combineReducers({
    slide:slide_listReducer,
    classify:classify_listReducer,
    ticketDetail,
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,
    theatreList,
    theaterDetail
})

// import theatreList from './theatreList'
// export default combineReducers({
//     theatreList
// })

export default rootReducer
