import { combineReducers } from "redux";
import netflixSeriesReducer from './netflix.reducer';

export default combineReducers({
    netflixSeries: netflixSeriesReducer
})