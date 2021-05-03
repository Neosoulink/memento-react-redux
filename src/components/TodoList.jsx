import * as React from "react";
import { connect } from "react-redux";
import { addTodoAction, toggleTodoAction } from "../features/todos/actions";
import { todosSelector } from "../features/todos/selectors";
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
		todos: todosSelector(state),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: () => dispatch(addTodoAction),
		onToggle: (todo) => dispatch(toggleTodoAction(todo))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
