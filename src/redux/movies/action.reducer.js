import { moviesActionTypes } from './movies.types';

const initialState = {
    loading: false,
    error: '',
    data: []
}

const actionMoviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                error: ''
            }
        case moviesActionTypes.LOAD_MORE_ACTION_MOVIES_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...payload],
                loading: false,
                error: ''
            }
        case moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default actionMoviesReducer;