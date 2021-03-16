export const addToFavouritesUtil = (favouritesList, favouriteToAdd) => {

    const existingFavourite = favouritesList.find(item => item.id === favouriteToAdd.id);
    if (existingFavourite) return;

    return [...favouritesList, {...favouriteToAdd}]
}

export const removeFromFavouritesUtil = (favouritesList, favouriteToRemove) => {

    const existingFavourite = favouritesList.find(item => item.id === favouriteToRemove.id);
    if (!existingFavourite) return;

    return favouritesList.map(item => item.id !== favouriteToRemove.id);
}