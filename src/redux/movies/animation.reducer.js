import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    animationMovies: []
}

const animationMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_SUCCESS:
            return {
                ...state,
                animationMovies: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_ANIMATION_MOVIES_FAILURE:
            return {
                ...state,
                animationMovies: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default animationMoviesReducer;