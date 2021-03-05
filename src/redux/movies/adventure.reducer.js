import { moviesActionTypes } from './movies.types';

const initialState = {
    adventureMovies: []
}

const adventureMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ADVENTURE_MOVIES:
            return {
                ...state,
                adventureMovies: payload 
            }
        default:
            return state;
    }
}

export default adventureMoviesReducer;