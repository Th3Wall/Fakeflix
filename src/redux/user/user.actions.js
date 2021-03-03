import { userActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
})
