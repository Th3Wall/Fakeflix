import { userActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
})

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})