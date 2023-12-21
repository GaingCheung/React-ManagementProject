import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk'
// import reducer from './reducer'
import NumReducer from "./NumStatus/reducer";
import ArrReducer from "./ArrStatus/reducer";


const reducer = combineReducers({
    NumReducer,
    ArrReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)))
// const store = legacy_createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store