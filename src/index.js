import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// DEV
import * as serviceWorker from './serviceWorker';

// COMPONENTS
import App from './App';

// STORES
import { store } from './app/store';

// STYLES
import './index.css';


// DEV DEBUGGING
console.log("TODO REDUX REVISION");
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
