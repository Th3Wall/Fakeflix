import { moviesActionTypes } from './movies.types';

const initialState = {
    actionMovies: []
}

const actionMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_TRENDING:
            return {
                ...state,
                actionMovies: payload 
            }
        default:
            return state;
    }
}

export default actionMoviesReducer;