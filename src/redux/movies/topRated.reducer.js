import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    topRatedMovies: []
}

const topRatedMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_TOP_RATED_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS:
            return {
                ...state,
                topRatedMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE:
            return {
                ...state,
                topRatedMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default topRatedMoviesReducer;