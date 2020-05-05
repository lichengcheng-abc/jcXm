import {
    combineReducers
} from 'redux'

// 崔的
import ticketDetail from '../reducer/ticketDetail';
import tourShow from '../reducer/tourShow';

// 程程的reducer
import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer,wtListReducer} 
from './home/index'

// 彩霞的
import theatreList from './theatreList'
import theaterDetail from './theaterDetail'
import CardproductIndex from './CardproductIndex'
import plusIndex from './plus'
import vipIndex from './vip'

const rootReducer = combineReducers({
    // 程程的
    slide:slide_listReducer,
    classify:classify_listReducer,
   
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,
    wt:wtListReducer,
   
    // 彩霞的  
    theatreList,
    theaterDetail,
    CardproductIndex,
    plusIndex,
    vipIndex,

    // 崔的
    ticketDetail,
    tourShow,
})



   



export default rootReducer
