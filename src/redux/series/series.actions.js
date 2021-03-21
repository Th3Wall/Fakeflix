import axios from '../../axiosInstance';
import { seriesActionTypes } from './series.types';

// Netflix
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
                const netflixSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchNetflixSeriesSuccess(netflixSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchNetflixSeriesFailure(errorMessage));
            })
    }
}


// Action & Adventure
export const fetchActionAdventureSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_ACTIONADVENTURE_SERIES_REQUEST
})

export const fetchActionAdventureSeriesSuccess = actionAdventureSeries => ({
    type: seriesActionTypes.FETCH_ACTIONADVENTURE_SERIES_SUCCESS,
    payload: actionAdventureSeries
})

export const fetchActionAdventureSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_ACTIONADVENTURE_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchActionAdventureSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchActionAdventureSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const actionAdventureSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchActionAdventureSeriesSuccess(actionAdventureSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchActionAdventureSeriesFailure(errorMessage));
            })
    }
}


// Animation
export const fetchAnimationSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_ANIMATION_SERIES_REQUEST
})

export const fetchAnimationSeriesSuccess = animationSeries => ({
    type: seriesActionTypes.FETCH_ANIMATION_SERIES_SUCCESS,
    payload: animationSeries
})

export const fetchAnimationSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_ANIMATION_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchAnimationSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchAnimationSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const animationSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchAnimationSeriesSuccess(animationSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchAnimationSeriesFailure(errorMessage));
            })
    }
}


// Comedy
export const fetchComedySeriesRequest = () => ({
    type: seriesActionTypes.FETCH_COMEDY_SERIES_REQUEST
})

export const fetchComedySeriesSuccess = comedySeries => ({
    type: seriesActionTypes.FETCH_COMEDY_SERIES_SUCCESS,
    payload: comedySeries
})

export const fetchComedySeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_COMEDY_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchComedySeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchComedySeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const comedySeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchComedySeriesSuccess(comedySeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchComedySeriesFailure(errorMessage));
            })
    }
}


// Crime
export const fetchCrimeSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_CRIME_SERIES_REQUEST
})

export const fetchCrimeSeriesSuccess = crimeSeries => ({
    type: seriesActionTypes.FETCH_CRIME_SERIES_SUCCESS,
    payload: crimeSeries
})

export const fetchCrimeSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_CRIME_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchCrimeSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchCrimeSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const crimeSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchCrimeSeriesSuccess(crimeSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchCrimeSeriesFailure(errorMessage));
            })
    }
}


// Documentary
export const fetchDocumentarySeriesRequest = () => ({
    type: seriesActionTypes.FETCH_DOCUMENTARY_SERIES_REQUEST
})

export const fetchDocumentarySeriesSuccess = documentarySeries => ({
    type: seriesActionTypes.FETCH_DOCUMENTARY_SERIES_SUCCESS,
    payload: documentarySeries
})

export const fetchDocumentarySeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_DOCUMENTARY_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchDocumentarySeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchDocumentarySeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const documentarySeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchDocumentarySeriesSuccess(documentarySeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchDocumentarySeriesFailure(errorMessage));
            })
    }
}


// Family
export const fetchFamilySeriesRequest = () => ({
    type: seriesActionTypes.FETCH_FAMILY_SERIES_REQUEST
})

export const fetchFamilySeriesSuccess = familySeries => ({
    type: seriesActionTypes.FETCH_FAMILY_SERIES_SUCCESS,
    payload: familySeries
})

export const fetchFamilySeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_FAMILY_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchFamilySeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchFamilySeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const familySeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchFamilySeriesSuccess(familySeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchFamilySeriesFailure(errorMessage));
            })
    }
}


// Kids
export const fetchKidsSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_KIDS_SERIES_REQUEST
})

export const fetchKidsSeriesSuccess = kidsSeries => ({
    type: seriesActionTypes.FETCH_KIDS_SERIES_SUCCESS,
    payload: kidsSeries
})

export const fetchKidsSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_KIDS_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchKidsSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchKidsSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const kidsSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchKidsSeriesSuccess(kidsSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchKidsSeriesFailure(errorMessage));
            })
    }
}


// Sci Fi & Fantasy
export const fetchSciFiFantasySeriesRequest = () => ({
    type: seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_REQUEST
})

export const fetchSciFiFantasySeriesSuccess = sciFiFantasySeries => ({
    type: seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_SUCCESS,
    payload: sciFiFantasySeries
})

export const fetchSciFiFantasySeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_SCIFIFANTASY_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchSciFiFantasySeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchSciFiFantasySeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const sciFiFantasySeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchSciFiFantasySeriesSuccess(sciFiFantasySeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchSciFiFantasySeriesFailure(errorMessage));
            })
    }
}


// Trending
export const fetchTrendingSeriesRequest = () => ({
    type: seriesActionTypes.FETCH_TRENDING_SERIES_REQUEST
})

export const fetchTrendingSeriesSuccess = trendingSeries => ({
    type: seriesActionTypes.FETCH_TRENDING_SERIES_SUCCESS,
    payload: trendingSeries
})

export const fetchTrendingSeriesFailure = errorMessage => ({
    type: seriesActionTypes.FETCH_TRENDING_SERIES_FAILURE,
    payload: errorMessage
})

export const fetchTrendingSeriesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchTrendingSeriesRequest());
        axios.get(fetchUrl)
            .then(res => {
                const trendingSeries = res.data.results.map(el => ({
                    ...el,
                    isFavourite: false
                }));
                dispatch(fetchTrendingSeriesSuccess(trendingSeries));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchTrendingSeriesFailure(errorMessage));
            })
    }
}