import {
    combineReducers
} from 'redux'
import {slide_listReducer,classify_listReducer} from './home/index'
// const rootReducer = combineReducers({
//     goods:[]
// })
const rootReducer = combineReducers({
    slide:slide_listReducer,
    classify:classify_listReducer
})
export default rootReducer