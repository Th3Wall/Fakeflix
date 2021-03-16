import { favouritesActionTypes } from "./favourites.types"
import { addToFavouritesUtil, removeFromFavouritesUtil } from "./favourites.utils"

const initialState = {
    favouritesList: []
}

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case favouritesActionTypes.ADD_TO_FAVOURITES:
            return {
                ...state,
                favouritesList: addToFavouritesUtil(state.favouritesList, action.payload)
            }
        case favouritesActionTypes.REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                favouritesList: removeFromFavouritesUtil(state.favouritesList, action.payload)
            }
        default:
            return state
    }
}

export default favouritesReducer
