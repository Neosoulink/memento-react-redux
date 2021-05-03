import React from "react";
import { connect } from "react-redux";
import { updateFilterAction } from "../features/todos/actions";
import { todosFilter } from "../features/todos/selectors";

export function TodoFilter({ onChange, filter }) {
	return <div>
		<button onClick={() => onChange(null)} disabled={filter === null}>Tout</button>
		<button onClick={() => onChange(true)} disabled={filter === true}>Completé</button>
		<button onClick={() => onChange(false)} disabled={filter === false}>À faire</button>
	</div>
}

export const TodoFilterStore = connect(
	(state) => ({
		filter: todosFilter(state)
	}),
	(dispatch) => ({
		onChange: (val) => dispatch(updateFilterAction(val))
	})
)(TodoFilter);
