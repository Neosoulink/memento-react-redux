import React from 'react';
import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
import { TodoListStore } from './components/TodoList';
import { TodoFilterStore } from './components/TodoFilter';
import { FormTodo } from './components/FormTodo';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/*<Counter />*/}
				<TodoListStore />
				<TodoFilterStore />
				<FormTodo />
			</header>
		</div>
	);
}

export default App;
