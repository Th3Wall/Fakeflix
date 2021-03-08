import axios from '../../utils';
import { moviesActionTypes } from './movies.types';

// Action
export const fetchActionMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST
})

export const fetchActionMoviesSuccess = actionMovies => ({
    type: moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS,
    payload: actionMovies
})

export const fetchActionMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE,
    payload: error
})

export const fetchActionMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchActionMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const actionMovies = res.data;
                dispatch(fetchActionMoviesSuccess(actionMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchActionMoviesFailure(errorMessage))
            })
    }
}


// Adventure
export const fetchAdventureMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST
})

export const fetchAdventureMoviesSuccess = adventureMovies => ({
    type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS,
    payload: adventureMovies
})

export const fetchAdventureMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE,
    payload: error
})


// Comedy
export const fetchComedyMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST
})

export const fetchComedyMoviesSuccess = comedyMovies => ({
    type: moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS,
    payload: comedyMovies
})

export const fetchComedyMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE,
    payload: error
})


// Horror
export const fetchHorrorMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST
})

export const fetchHorrorMoviesSuccess = horrorMovies => ({
    type: moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS,
    payload: horrorMovies
})

export const fetchHorrorMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE,
    payload: error
})


// Netflix
export const fetchNetflixMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_NETFLIX_MOVIES_REQUEST
})

export const fetchNetflixMoviesSuccess = netflixMovies => ({
    type: moviesActionTypes.FETCH_NETFLIX_MOVIES_SUCCESS,
    payload: netflixMovies
})

export const fetchNetflixMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_NETFLIX_MOVIES_FAILURE,
    payload: error
})


// Romance
export const fetchRomanceMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST
})

export const fetchRomanceMoviesSuccess = romanceMovies => ({
    type: moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
    payload: romanceMovies
})

export const fetchRomanceMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
    payload: error
})


// Top Rated
export const fetchTopRatedMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_REQUEST
})

export const fetchTopRatedMoviesSuccess = topRatedMovies => ({
    type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS,
    payload: topRatedMovies
})

export const fetchTopRatedMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
    payload: error
})


// Trending
export const fetchTrendingMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_TRENDING_MOVIES_REQUEST
})

export const fetchTrendingMoviesSuccess = trendingMovies => ({
    type: moviesActionTypes.FETCH_TRENDING_MOVIES_SUCCESS,
    payload: trendingMovies
})

export const fetchTrendingMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_TRENDING_MOVIES_FAILURE,
    payload: error
})