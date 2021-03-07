import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    adventureMovies: []
}

const adventureMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS:
            return {
                ...state,
                adventureMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE:
            return {
                ...state,
                adventureMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default adventureMoviesReducer;