import { authActionTypes } from "./auth.types"

export const checkUserSession = () => ({
    type: authActionTypes.CHECK_USER_SESSION
})

export const metamaskSignInStart = () => ({
    type: authActionTypes.METAMASK_SIGN_IN_START
})

export const walletConnectSignInStart = () => ({
  type: authActionTypes.WALLETCONNECT_SIGN_IN_START
})

export const niftyConnectSignInStart = tokenAndType => ({
  type: authActionTypes.NIFTYWALLET_SIGN_IN_START,
  payload: tokenAndType
})

export const coinbaseSignInStart = () => ({
  type: authActionTypes.COINBASE_SIGN_IN_START
})

export const signInSuccess = user => ({
    type: authActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = error => ({
    type: authActionTypes.SIGN_IN_FAILURE,
    payload: error
})

export const signOutStart = () => ({
    type: authActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: authActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = error => ({
    type: authActionTypes.SIGN_OUT_FAILURE,
    payload: error
})