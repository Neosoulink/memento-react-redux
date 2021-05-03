import { UPDATE_FILTER_ACTION } from "./types";

const initialState = null;

export function filterReducer(state = initialState, { type, payload }) {
	switch (type) {

		case UPDATE_FILTER_ACTION:
			return payload

		default:
			return state
	}
}
