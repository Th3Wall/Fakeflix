import { createSelector } from "reselect";

const selectUser = (state) => state.auth;

export const selectCurrentUser = createSelector(
    [selectUser],
    auth => auth.currentUser
);

export const selectAuthErrors = createSelector(
    [selectUser],
    auth => auth.error
);