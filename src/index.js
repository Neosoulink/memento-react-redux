//import React from 'react';
import * as serviceWorker from './serviceWorker';

// TODO REDUX
import { createStore, combineReducers } from "redux";

console.log("TODO REDUX REVISION");

// STATE
let id = 2;
const initialState = [
	{
		id: 1,
		title: 'Commencer la revision',
		completed: true,
	},
	{
		id: 2,
		title: 'Finir la revision',
		completed: false,
	}
];

// TYPES
const ADD_TODO_ACTION = "ADD_TODO_ACTION";

// REDUCER
function TodoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO_ACTION:
			return [...state, { id: ++id, completed: false, title: 'Unknown', ...action.payload }]

		default:
			return state;
	}
}

const store = createStore(combineReducers({
	todo: TodoReducer,
	filter: (state = 0, action) => state
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// DEBUGGING
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo dispatch" } })
store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo dispatch" } })

//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import { store } from './app/store';
//import { Provider } from 'react-redux';

//ReactDOM.render(
//  <React.StrictMode>
//    <Provider store={store}>
//      <App />
//    </Provider>
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
