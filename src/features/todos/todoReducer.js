import { ADD_TODO_ACTION, UPDATE_TODO_ACTION } from "./types";

// STATE
let id = 2;
const initialState = [
	{
		id: 1,
		title: 'Commencer la revision',
		completed: true,
	},
	{
		id: 2,
		title: 'Finir la revision',
		completed: false,
	}
];

// REDUCER
export default function TodoReducer(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case ADD_TODO_ACTION:
			return [...state, { id: ++id, completed: false, title: 'Unknown', ...action.payload }]

		case UPDATE_TODO_ACTION:
			return state.map(todo => {
				if (todo.id === action.payload.id) return { ...todo, ...action.payload }
				return todo;
			})

		default:
			return state;
	}
}
