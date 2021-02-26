import {applyMiddleware, combineReducers, createStore} from "redux"
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";
import filterReducer from "./filter-reducer";

let reducers = combineReducers({
    userPage: usersReducer,
    filterPage: filterReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store;

export default store;