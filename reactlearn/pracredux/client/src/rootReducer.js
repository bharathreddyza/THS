import {combineReducers} from 'redux'
import {toggleReducer,Counter} from './reducers'
 export const rootReducer = combineReducers({
    toggleReducer,
    Counter
})