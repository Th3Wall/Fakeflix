import { createSelector } from "reselect";

const selectFavourites = state => state.favourites;

export const selectFavouritesList = createSelector(
    [selectFavourites],
    favourites => favourites.favouritesList
)