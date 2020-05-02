import {
    combineReducers
} from 'redux'
<<<<<<< HEAD
import {slide_listReducer,classify_listReducer} from './home/index';
import ticketDetail from '../reducer/ticketDetail';
=======

import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer} 
from './home/index'
>>>>>>> 61134a47135b46356132dc1fe9b51536a18f9084
// const rootReducer = combineReducers({
//     goods:[]
// })

const rootReducer = combineReducers({
    slide:slide_listReducer,
    classify:classify_listReducer,
<<<<<<< HEAD
    ticketDetail,
=======
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,

    theatreList
>>>>>>> 61134a47135b46356132dc1fe9b51536a18f9084
})


import theatreList from './theatreList'
// export default combineReducers({
//     theatreList
// })
