import { searchActionTypes } from "./search.types";

const initialState = {
	searchResults: [],
	error: null,
	isLoading: false
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case searchActionTypes.FETCH_SEARCH_RESULTS_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS:
			return {
				...state,
				searchResults: [...action.payload],
				error: false,
				isLoading: false
			}
		case searchActionTypes.FETCH_SEARCH_RESULTS_FAILURE:
			return {
				...state,
				searchResults: [],
				error: action.payload,
				isLoading: false
			}
		default:
			return state
	}
}

export default searchReducer
