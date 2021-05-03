// TODO LIST
export const todosSelector = ({ todos }) => todos;
export const filteredTodosSelector = ({ todos, filter }) => {
	if (filter === null) {
		return todos
	}
	return todos.filter(todo => todo.completed === filter);
}

// TODO FILTER
export const todosFilter = ({ filter }) => filter;
