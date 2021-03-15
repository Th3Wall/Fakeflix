import { createSelector } from "reselect";

export const selectNetflixSeries = state => state.series.netflixSeries;

export const selectNetflixSeriesSelector = createSelector(
    [selectNetflixSeries],
    netflixSeries => netflixSeries.series
)