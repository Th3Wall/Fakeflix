import { createSelector } from "reselect";

const selectSearch = (state) => state.search;

export const selectSearchResults = createSelector(
	[selectSearch],
	search => search.searchResults
);

export const selectSearchInputValue = createSelector(
	[selectSearch],
	search => search.inputValue
);