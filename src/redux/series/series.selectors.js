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

export const selectNetflixSeriesSelector = createSelector(
    [selectNetflixSeries],
    netflixSeries => netflixSeries.series
)

export const selectActionAdventureSeriesSelector = createSelector(
    [selectActionAdventureSeries],
    actionAdventureSeries => actionAdventureSeries.series
)

export const selectAnimationSeriesSelector = createSelector(
    [selectAnimationSeries],
    animationSeries => animationSeries.series
)

export const selectComedySeriesSelector = createSelector(
    [selectComedySeries],
    comedySeries => comedySeries.series
)

export const selectCrimeSeriesSelector = createSelector(
    [selectCrimeSeries],
    crimeSeries => crimeSeries.series
)

export const selectDocumentarySeriesSelector = createSelector(
    [selectDocumentarySeries],
    documentarySeries => documentarySeries.series
)

export const selectFamilySeriesSelector = createSelector(
    [selectFamilySeries],
    familySeries => familySeries.series
)

export const selectKidsSeriesSelector = createSelector(
    [selectKidsSeries],
    kidsSeries => kidsSeries.series
)

export const selectSciFiFantasySeriesSelector = createSelector(
    [selectSciFiFantasySeries],
    sciFiFantasySeries => sciFiFantasySeries.series
)