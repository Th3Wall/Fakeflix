import { authActionTypes } from "./auth.types"

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authActionTypes.EMAIL_SIGN_IN_START:
        case authActionTypes.GOOGLE_SIGN_IN_START:
        case authActionTypes.SIGN_UP_START:
            return {
                ...state,
                loading: true
            }
        case authActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                error: null
            }
        case authActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                loading: false,
                error: null
            }
        case authActionTypes.SIGN_IN_FAILURE:
        case authActionTypes.SIGN_UP_FAILURE:
        case authActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

export default authReducer
