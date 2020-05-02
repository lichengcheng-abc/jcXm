import {
    combineReducers
} from 'redux'
import {slide_listReducer,classify_listReducer} from './home/index';
import ticketDetail from '../reducer/ticketDetail';
// const rootReducer = combineReducers({
//     goods:[]
// })
const rootReducer = combineReducers({
    slide:slide_listReducer,
    classify:classify_listReducer,
    ticketDetail,
})
export default rootReducer