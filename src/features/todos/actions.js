import wait from "../../helpers/wait";
import { ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_FILTER_ACTION, UPDATE_TODO_ACTION } from "./types";

// TODO LIST
export const addTodoAction = (newTodo) => async (dispatch) => {
	await wait(2000);
	dispatch({
		type: ADD_TODO_ACTION,
		payload: { title: "Added from todo list", ...newTodo }
	})
}
export const toggleTodoAction = (todo) => {
	return { type: UPDATE_TODO_ACTION, payload: { ...todo, completed: !todo.completed } }
}

export const deleteTodoAction = (todo) => {
	return { type: DELETE_TODO_ACTION, payload: todo.id }
}

// TODO FILTER
export const updateFilterAction = (val) => {
	return { type: UPDATE_FILTER_ACTION, payload: val }
}
