import { authActionTypes } from "./auth.types"

const initialState = {
    currentUser: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case authActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                error: null
            }
        case authActionTypes.SIGN_IN_FAILURE:
        case authActionTypes.SIGN_UP_FAILURE:
        case authActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default authReducer
