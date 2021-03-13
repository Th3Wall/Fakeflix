import { moviesActionTypes } from './movies.types';

const initialState = {
    currentGenre: '',
}

const genreReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.CHANGE_CURRENT_GENRE:
            return {
                ...state,
                currentGenre: payload,
            }
        default:
            return state;
    }
}

export default genreReducer;