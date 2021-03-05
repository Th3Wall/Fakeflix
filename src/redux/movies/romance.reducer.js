import { moviesActionTypes } from './movies.types';

const initialState = {
    romanceMovies: []
}

const romanceMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ROMANCE_MOVIES:
            return {
                ...state,
                romanceMovies: payload 
            }
        default:
            return state;
    }
}

export default romanceMoviesReducer;