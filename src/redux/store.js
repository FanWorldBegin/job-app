import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {counter} from './index.redux.js'
//compose 对函数进行组合
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, composeEnhancers(applyMiddleware(thunk)))
export default store;
