import { moviesActionTypes } from './movies.types';

const initialState = {
    comedyMovies: []
}

const comedyMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_COMEDY_MOVIES:
            return {
                ...state,
                comedyMovies: payload 
            }
        default:
            return state;
    }
}

export default comedyMoviesReducer;