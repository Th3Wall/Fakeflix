import { applyMiddleware, createStore } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"
import rootReducer from "./rootReducer"

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store
