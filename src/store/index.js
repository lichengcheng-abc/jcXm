import {
    createStore,
    applyMiddleware 
} from 'redux'
// 为了应用异步action
import thunk from 'redux-thunk'

import rootReducer from '../store/reducer'
export default createStore (rootReducer,applyMiddleware(thunk))



