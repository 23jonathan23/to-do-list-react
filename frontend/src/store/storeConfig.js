import { combineReducers, createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import todoReducer from './reducers/todoReducer'

//Plugin redux, para desenvolvedor
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
 && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
  todo: todoReducer
})

function storeConfig() {
  return applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
}

export default storeConfig