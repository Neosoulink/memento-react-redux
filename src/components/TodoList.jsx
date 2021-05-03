import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { connect } from "react-redux";
import { addTodoAction, toggleTodoAction } from "../features/todos/actions";
import { todosSelector } from "../features/todos/selectors";

function TodoItem({ todo, onToggle }) {
	return <li>
		<label>
			<input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
			{todo.title}
		</label>
	</li>
}

export function TodoList(/*{  todos, onToggle, addTodo  }*/) {
	const todos = useSelector(todosSelector);

	const dispatch = useDispatch();

	const addTodo = React.useCallback(() => {
		dispatch(addTodoAction())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const onToggle = React.useCallback((todo) => {
		dispatch(toggleTodoAction(todo))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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

//const mapStateToProps = (state) => {
//	return {
//		todos: todosSelector(state),
//	}
//};

//const mapDispatchToProps = (dispatch) => {
//	return {
//		addTodo: () => dispatch(addTodoAction),
//		onToggle: (todo) => dispatch(toggleTodoAction(todo))
//	}
//};

//export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
