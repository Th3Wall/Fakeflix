import { userActionTypes } from "./user.types"
import { auth } from "../../firebase/firebaseUtils";

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})

export const emailSignInStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = user => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signUpStart = () => ({
    type: userActionTypes.SIGN_UP_START
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
})

export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
})

export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

export const handleSignUpAsync = (email, password, name) => {
    return dispatch => {
        dispatch(signUpStart());
        auth.createUserWithEmailAndPassword(email, password)
            .then(({ user }) => dispatch(signUpSuccess({user, additionalData: name})))
            .catch((error)=> dispatch(signUpFailure(error.message)))
    }
}

export const handleSignOutAsync = () => {
    return dispatch => {
        dispatch(signOutStart());
        auth.signOut()
            .then(() => dispatch(signOutSuccess()))
            .catch((error) => dispatch(signOutFailure(error.message)))
    }
}