//import React from 'react';
import * as serviceWorker from './serviceWorker';
import { store } from './app/store';
import { ADD_TODO_ACTION } from "./features/todos/types";


console.log("TODO REDUX REVISION");

// DEBUGGING
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo dispatch" } })
store.dispatch({ type: ADD_TODO_ACTION, payload: { title: "Demo dispatch" } })

//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
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
