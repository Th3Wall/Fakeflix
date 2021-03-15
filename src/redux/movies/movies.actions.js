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

export const fetchAdventureMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchAdventureMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const adventureMovies = res.data;
                dispatch(fetchAdventureMoviesSuccess(adventureMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchAdventureMoviesFailure(errorMessage))
            })
    }
}


// Animation
export const fetchAnimationMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_ANIMATION_MOVIES_REQUEST
})

export const fetchAnimationMoviesSuccess = animationMovies => ({
    type: moviesActionTypes.FETCH_ANIMATION_MOVIES_SUCCESS,
    payload: animationMovies
})

export const fetchAnimationMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_ANIMATION_MOVIES_FAILURE,
    payload: error
})

export const fetchAnimationMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchAnimationMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const animationMovies = res.data;
                dispatch(fetchAnimationMoviesSuccess(animationMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchAnimationMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchComedyMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchComedyMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const comedyMovies = res.data;
                dispatch(fetchComedyMoviesSuccess(comedyMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchComedyMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchHorrorMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchHorrorMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const horrorMovies = res.data;
                dispatch(fetchHorrorMoviesSuccess(horrorMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchHorrorMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchNetflixMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchNetflixMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const netflixMovies = res.data;
                dispatch(fetchNetflixMoviesSuccess(netflixMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchNetflixMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchRomanceMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchRomanceMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const romanceMovies = res.data;
                dispatch(fetchRomanceMoviesSuccess(romanceMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchRomanceMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchTopRatedMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchTopRatedMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const topRatedMovies = res.data;
                dispatch(fetchTopRatedMoviesSuccess(topRatedMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchTopRatedMoviesFailure(errorMessage))
            })
    }
}


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

export const fetchTrendingMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchTrendingMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const trendingMovies = res.data;
                dispatch(fetchTrendingMoviesSuccess(trendingMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchTrendingMoviesFailure(errorMessage))
            })
    }
}


// Upcoming
export const fetchUpcomingMoviesRequest = () => ({
    type: moviesActionTypes.FETCH_UPCOMING_MOVIES_REQUEST
})

export const fetchUpcomingMoviesSuccess = upcomingMovies => ({
    type: moviesActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: upcomingMovies
})

export const fetchUpcomingTrendingMoviesFailure = error => ({
    type: moviesActionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
    payload: error
})

export const fetchUpcomingMoviesAsync = fetchUrl => {
    return dispatch => {
        dispatch(fetchUpcomingMoviesRequest())
        axios.get(fetchUrl)
            .then(res => {
                const upcomingMovies = res.data;
                dispatch(fetchUpcomingMoviesSuccess(upcomingMovies))
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchUpcomingTrendingMoviesFailure(errorMessage))
            })
    }
}