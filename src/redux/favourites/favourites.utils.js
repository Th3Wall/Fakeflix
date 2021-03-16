export const addToFavouritesUtil = (favouritesList, favouriteToAdd) => {
    const existingFavourite = favouritesList.find(fav => fav.item.id === favouriteToAdd.item.id);

    return existingFavourite
        ? [...favouritesList]
        : [...favouritesList, favouriteToAdd];
}

export const removeFromFavouritesUtil = (favouritesList, favouriteToRemove) => {
    const existingFavourite = favouritesList.find(fav => fav.item.id === favouriteToRemove.item.id);
    
    return existingFavourite
        ? favouritesList.filter(fav => fav.item.id !== favouriteToRemove.item.id)
        : [...favouritesList];
}