import { searchActionTypes } from "./search.types";
import axios from "../../axiosInstance";
import requests from "../../requests";

const reduceJWItem = (data) => {
	return { 
    id: data.mediaid,
    title: data.title,
    overview: data.description,
    original_name: '',
    original_title: '',
    name: '',
    genre_ids: [],
    poster_path: data.image,
    backdrop_path: data.image,
    release_date: data['Release Date'], 
    cast: data['Cast'], 
    status: data['Status'],  
    genres: data['Genres'],  
    link: data.link
  }
};

export const changeSearchInputValue = inputValue => ({
	type: searchActionTypes.CHANGE_SEARCH_INPUT_VALUE,
	payload: inputValue
})

export const clearSearchInputValue = () => ({
	type: searchActionTypes.CLEAR_SEARCH_INPUT_VALUE
})

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
				const res = response.data.playlist.map(el => ({
					...reduceJWItem(el)
				}));
				dispatch(fetchSearchResultsSuccess(res));
			})
			.catch(err => {
				dispatch(fetchSearchResultsFailure(err.message));
			});
	}
}