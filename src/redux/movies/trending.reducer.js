import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    trendingMovies: []
}

const trendingMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_TRENDING_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                trendingMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_TRENDING_MOVIES_FAILURE:
            return {
                ...state,
                trendingMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default trendingMoviesReducer;