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
import {searchListReducer,hotSearchReducer}  from './search/index'
// 彩霞的
import theatreList from './theatreList'
import theaterDetail from './theaterDetail'
import CardproductIndex from './CardproductIndex'
import plusIndex from './plus'
import vipIndex from './vip'

//世强的
import {the_pageIndex,the_library_nav,the_library_map,the_waterfall} from './library/index';

const rootReducer = combineReducers({
    // 程程的
    slide:slide_listReducer,
    classify:classify_listReducer,
   
    vip:vipIndexReducer,
    hots:hotsRecommendListReducer,
    wt:wtListReducer,
    showList:showListReducer,
    searchList:searchListReducer,
    hotSearch:hotSearchReducer,


    // 世强的
    page:the_pageIndex,
    nav:the_library_nav,
    map:the_library_map,
    init:the_waterfall,
    // 彩霞的
   
    // 彩霞的  
    theatreList,
    theaterDetail,
    CardproductIndex,
    plusIndex,
    vipIndex,

    // 崔的
    ticketDetail,
    tourShow,
    touring,
    cardhappy,
    group,
})



   



export default rootReducer

   




