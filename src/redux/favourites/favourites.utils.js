export const addToFavouritesUtil = (favouritesList, favouriteToAdd) => {
    const existingFavourite = favouritesList.find(fav => fav.id === favouriteToAdd.id);

    return existingFavourite
        ? [...favouritesList]
        : [...favouritesList, favouriteToAdd];
}

export const removeFromFavouritesUtil = (favouritesList, favouriteToRemove) => {
    const existingFavourite = favouritesList.find(fav => fav.id === favouriteToRemove.id);
    
    return existingFavourite
        ? favouritesList.filter(fav => fav.id !== favouriteToRemove.id)
        : [...favouritesList];
}