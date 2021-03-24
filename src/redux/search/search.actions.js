import { searchActionTypes } from "./search.types";
import axios from "../../axiosInstance";
import requests from "../../requests";

export const fetchSearchResultsRequest = searchQuery => ({
	type: searchActionTypes.FETCH_SEARCH_RESULTS_REQUEST,
	payload: searchQuery
})

export const fetchSearchResultsSuccess = searchResults => ({
	type: searchActionTypes.FETCH_SEARCH_RESULTS_SUCCESS,
	payload: searchResults
})

export const fetchSearchResultsFailure = errorMessage => ({
	type: searchActionTypes.FETCH_SEARCH_RESULTS_FAILURE,
	payload: errorMessage
})

export const fetchSearchResultsAsync = searchQuery => {
	return dispatch => {
		dispatch(fetchSearchResultsRequest(searchQuery));
		axios.get(`${requests.fetchSearchQuery}${searchQuery}`)
			.then(response => {
				const { data: { results } } = response;
				dispatch(fetchSearchResultsSuccess(results));
			})
			.catch(err => {
				dispatch(fetchSearchResultsFailure(err.message));
			});
	}
}