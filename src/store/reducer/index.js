import {
    combineReducers
} from 'redux'

import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer} 
from './home/index'
// const rootReducer = combineReducers({
//     goods:[]
// })

const rootReducer = combineReducers({
    slide:slide_listReducer,
    classify:classify_listReducer,
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,

    theatreList
})


import theatreList from './theatreList'
// export default combineReducers({
//     theatreList
// })
