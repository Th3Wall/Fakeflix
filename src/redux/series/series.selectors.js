import { createSelector } from "reselect";

export const selectNetflixSeries = state => state.series.netflixSeries;
export const selectActionAdventureSeries = state => state.series.actionAdventureSeries;
export const selectAnimationSeries = state => state.series.animationSeries;
export const selectComedySeries = state => state.series.comedySeries;
export const selectCrimeSeries = state => state.series.crimeSeries;
export const selectDocumentarySeries = state => state.series.documentarySeries;
export const selectFamilySeries = state => state.series.familySeries;
export const selectKidsSeries = state => state.series.kidsSeries;
export const selectSciFiFantasySeries = state => state.series.sciFiFantasySeries;
export const selectTrendingSeries = state => state.series.trendingSeries;

export const selectNetflixSeriesSelector = createSelector(
    [selectNetflixSeries],
    netflixSeries => netflixSeries.data
)

export const selectActionAdventureSeriesSelector = createSelector(
    [selectActionAdventureSeries],
    actionAdventureSeries => actionAdventureSeries.data
)

export const selectAnimationSeriesSelector = createSelector(
    [selectAnimationSeries],
    animationSeries => animationSeries.data
)

export const selectComedySeriesSelector = createSelector(
    [selectComedySeries],
    comedySeries => comedySeries.data
)

export const selectCrimeSeriesSelector = createSelector(
    [selectCrimeSeries],
    crimeSeries => crimeSeries.data
)

export const selectDocumentarySeriesSelector = createSelector(
    [selectDocumentarySeries],
    documentarySeries => documentarySeries.data
)

export const selectFamilySeriesSelector = createSelector(
    [selectFamilySeries],
    familySeries => familySeries.data
)

export const selectKidsSeriesSelector = createSelector(
    [selectKidsSeries],
    kidsSeries => kidsSeries.data
)

export const selectSciFiFantasySeriesSelector = createSelector(
    [selectSciFiFantasySeries],
    sciFiFantasySeries => sciFiFantasySeries.data
)

export const selectTrendingSeriesSelector = createSelector(
    [selectTrendingSeries],
    trendingSeries => trendingSeries.data
)