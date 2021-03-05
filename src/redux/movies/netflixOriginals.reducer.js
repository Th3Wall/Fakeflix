import { moviesActionTypes } from './movies.types';

const initialState = {
    netflixOriginalMovies: []
}

const netflixOriginalMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_NETFLIX_ORIGINALS:
            return {
                ...state,
                netflixOriginalMovies: payload 
            }
        default:
            return state;
    }
}

export default netflixOriginalMoviesReducer;