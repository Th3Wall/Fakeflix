import { moviesActionTypes } from './movies.types';

const initialState = {
    topRatedMovies: []
}

const topRatedMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_TOP_RATED:
            return {
                ...state,
                topRatedMovies: payload 
            }
        default:
            return state;
    }
}

export default topRatedMoviesReducer;