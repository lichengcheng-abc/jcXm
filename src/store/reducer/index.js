import {
    combineReducers
} from 'redux'

// 崔的
import ticketDetail from '../reducer/ticketDetail';
import tourShow from '../reducer/tourShow';
import touring from '../reducer/touring';
import cardhappy from '../reducer/cardhappy';
import group from '../reducer/group';

// 程程的reducer
import {slide_listReducer,classify_listReducer,vipIndexReducer,hotsRecommendListReducer,wtListReducer,showListReducer} 
from './home/index'
import {searchListReducer}  from './search/index'
// 彩霞的
import theatreList from './theatreList'
import theaterDetail from './theaterDetail'
import CardproductIndex from './CardproductIndex'

const rootReducer = combineReducers({
    // 程程的
    slide:slide_listReducer,
    classify:classify_listReducer,
   
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,
    wt:wtListReducer,
    showList:showListReducer,
    searchList:searchListReducer,



    // 彩霞的
   
    // 彩霞的  
    theatreList,
    theaterDetail,
    CardproductIndex,

    // 崔的
    ticketDetail,
    tourShow,
    touring,
    cardhappy,
    group,
})



   



export default rootReducer

   




