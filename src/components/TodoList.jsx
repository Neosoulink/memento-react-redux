import * as React from "react";
import { connect } from "react-redux";
import { ADD_TODO_ACTION, UPDATE_TODO_ACTION } from "../features/todos/types";

function TodoItem({ todo, onToggle }) {
	return <li>
		<label>
			<input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
			{todo.title}
		</label>
	</li>
}

function TodoList({ todos, onToggle, addTodo }) {
	return <>
		<legend>TODO LIST</legend>
		<ul style={{
			textAlign: "left"
		}}>
			{todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />)}
		</ul>

		<button onClick={addTodo}>Add todo</button>
	</>
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: () => dispatch({ type: ADD_TODO_ACTION, payload: { title: "Added from todo list" } }),
		onToggle: (todo) => dispatch({ type: UPDATE_TODO_ACTION, payload: { ...todo, completed: !todo.completed } })
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
