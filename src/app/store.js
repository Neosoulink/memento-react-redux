import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filterReducer } from "../features/todos/filterReducer";
import TodoReducer from "../features/todos/todoReducer";

export const store = createStore(combineReducers({
	todos: TodoReducer,
	filter: filterReducer,
}), composeWithDevTools(
	applyMiddleware(thunk)
));

//import { configureStore } from '@reduxjs/toolkit';
//import counterReducer from '../features/counter/counterSlice';

//export const store = configureStore({
//  reducer: {
//    counter: counterReducer,
//  },
//});
