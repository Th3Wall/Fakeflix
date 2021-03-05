import { moviesActionTypes } from './movies.types';

const initialState = {
    horrorMovies: []
}

const horrorMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_HORROR_MOVIES:
            return {
                ...state,
                horrorMovies: payload 
            }
        default:
            return state;
    }
}

export default horrorMoviesReducer;