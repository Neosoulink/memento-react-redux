import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../features/todos/actions";

export function FormTodo() {
	const dispatch = useDispatch();

	const input = React.useRef(null);
	const [loading, setLoading] = React.useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		await dispatch(addTodoAction({ title: input.current.value }))

		setLoading(false);

		input.current.value = null;
		input.current.focus();
	}


	return <form onSubmit={handleSubmit}>
		<input type="text" ref={input} placeholder="Tache" />
		<button type="submit" disabled={loading}>{!loading ? 'Ajouter' : 'Loading...'}</button>
	</form>
}
