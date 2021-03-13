import { createSelector } from 'reselect';

const selectHomepage = state => state.homepage;

export const selectHomepageRows = createSelector(
    [selectHomepage],
    homepage => homepage.rows
)