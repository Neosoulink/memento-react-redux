import { ADD_TODO_ACTION, DELETE_TODO_ACTION, UPDATE_TODO_ACTION } from "./types";

export const addTodoAction = () => {
	return { type: ADD_TODO_ACTION, payload: { title: "Added from todo list" } }
}

export const toggleTodoAction = (todo) => {
	return { type: UPDATE_TODO_ACTION, payload: { ...todo, completed: !todo.completed } }
}

export const deleteTodoAction = (todo) => {
	return { type: DELETE_TODO_ACTION, payload: todo.id }
}
