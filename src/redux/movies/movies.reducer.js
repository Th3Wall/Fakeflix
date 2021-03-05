import { moviesActionTypes } from './movies.types';

const initialState = {
    bannerMovies: []
}

const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_BANNER_DATA:
            return {
                ...state,
                bannerMovie: payload 
            }
        default:
            return state;
    }
}

export default moviesReducer;