import { createSelector } from "reselect";

const selectFavourites = state => state.favourites;

export const selectFavouritesList = createSelector(
    [selectFavourites],
    favourites => favourites.favouritesList
)

export const selecFavouritesById = (state, resultId) => state.favourites.favouritesList.find(fav => fav.item.id === resultId);