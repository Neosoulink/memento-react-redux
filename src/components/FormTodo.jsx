import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../features/todos/actions";

export function FormTodo() {
	const dispatch = useDispatch();
	const AddTodo = React.useCallback((newTodo) => {
		dispatch(addTodoAction(newTodo))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const input = React.useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		AddTodo({ title: input.current.value });
		input.current.value = null;
	}


	return <form onSubmit={handleSubmit}>
		<input type="text" ref={input} placeholder="Tache" />
		<button type="submit">Ajouter</button>
	</form>
}
