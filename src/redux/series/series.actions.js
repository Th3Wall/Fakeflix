import axios from '../../utils';
import { seriesActionTypes } from './series.types';

export const fetchNetflixSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_NETFLIX_SERIES_REQUEST
})

export const fetchNetflixSeriesSuccess = netflixSeries => ({
    type: seriesActionTypes.FETCH_NETFLIX_SERIES_SUCCESS,
    payload: netflixSeries
})

export const fetchNetflixSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_NETFLIX_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchNetflixSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchNetflixSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const netflixSeries = res.data;
                dispatch(fetchNetflixSeriesSuccess(netflixSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchNetflixSeriesFailure(errorMessage));
            })
    }
}