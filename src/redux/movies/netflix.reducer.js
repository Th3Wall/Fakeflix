import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    netflixMovies: []
}

const netflixMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_NETFLIX_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_NETFLIX_MOVIES_SUCCESS:
            return {
                ...state,
                netflixMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_NETFLIX_MOVIES_FAILURE:
            return {
                ...state,
                netflixMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default netflixMoviesReducer;