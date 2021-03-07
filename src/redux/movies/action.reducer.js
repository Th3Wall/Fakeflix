import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    actionMovies: []
}

const actionMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS:
            return {
                ...state,
                actionMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE:
            return {
                ...state,
                actionMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default actionMoviesReducer;