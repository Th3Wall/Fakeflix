import { favouritesActionTypes } from "./favourites.types";

export const addToFavourites = item => ({
    type: favouritesActionTypes.ADD_TO_FAVOURITES,
    payload: {
        ...item,
        isFavourite: true
    }
})

export const removeFromFavourites = item => ({
    type: favouritesActionTypes.REMOVE_FROM_FAVOURITES,
    payload: {
        ...item,
        isFavourite: false
    }
})