import {
    combineReducers
} from 'redux'

// 崔的
import ticketDetail from '../reducer/ticketDetail';

// 程程的reducer
import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer,wtListReducer} 
from './home/index'

// 彩霞的
import theatreList from './theatreList'

const rootReducer = combineReducers({
    // 程程的
    slide:slide_listReducer,
    classify:classify_listReducer,
    ticketDetail,
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,
    wt:wtListReducer,
   
    // 彩霞的
    theatreList,

    // 崔的
    ticketDetail
})




export default rootReducer
