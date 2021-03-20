import { combineReducers } from "redux";
import netflixSeriesReducer from './netflix.reducer';
import actionAdventureSeriesReducer from './actionAdventure.reducer';
import animationSeriesReducer from './animation.reducer';
import comedySeriesReducer from './comedy.reducer';
import crimeSeriesReducer from './crime.reducer';
import documentarySeriesReducer from './documentary.reducer';
import familySeriesReducer from './family.reducer';
import kidsSeriesReducer from './kids.reducer';
import sciFiFantasyReducer from './sciFiFantasy.reducer';
import trendingSeriesReducer from './trending.reducer';

export default combineReducers({
    netflixSeries: netflixSeriesReducer,
    actionAdventureSeries: actionAdventureSeriesReducer,
    animationSeries: animationSeriesReducer,
    comedySeries: comedySeriesReducer,
    crimeSeries: crimeSeriesReducer,
    documentarySeries: documentarySeriesReducer,
    familySeries: familySeriesReducer,
    kidsSeries: kidsSeriesReducer,
    sciFiFantasySeries: sciFiFantasyReducer,
    trendingSeries: trendingSeriesReducer
})