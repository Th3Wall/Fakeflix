import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    comedyMovies: []
}

const comedyMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS:
            return {
                ...state,
                comedyMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE:
            return {
                ...state,
                comedyMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default comedyMoviesReducer;