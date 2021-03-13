import { moviesActionTypes } from '../movies.types';

const initialState = {
    loading: false,
    error: '',
    horrorMovies: []
}

const horrorMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS:
            return {
                ...state,
                horrorMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE:
            return {
                ...state,
                horrorMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default horrorMoviesReducer;