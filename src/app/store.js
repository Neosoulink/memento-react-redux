import { createStore, combineReducers } from "redux";
import TodoReducer from "../features/todos/todoReducer";

export const store = createStore(combineReducers({
	todos: TodoReducer,
	filter: (state = 0, action) => state
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';

//export const store = configureStore({
//  reducer: {
//    counter: counterReducer,
//  },
//});
