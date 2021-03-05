import { moviesActionTypes } from './movies.types';

const initialState = {
    trendingMovies: []
}

const trendingMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_TRENDING:
            return {
                ...state,
                trendingMovies: payload 
            }
        default:
            return state;
    }
}

export default trendingMoviesReducer;