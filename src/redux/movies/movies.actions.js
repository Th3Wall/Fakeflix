import axios from "../../axiosInstance";
import { moviesActionTypes } from "./movies.types";

// Action
export const fetchActionMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_ACTION_MOVIES_REQUEST,
});

export const fetchActionMoviesSuccess = (actionMovies, isPage) => ({
	type: isPage
		? moviesActionTypes.FETCH_ACTION_MOVIES_SUCCESS
		: moviesActionTypes.LOAD_MORE_ACTION_MOVIES_SUCCESS,
	payload: actionMovies,
});

export const fetchActionMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_ACTION_MOVIES_FAILURE,
	payload: error,
});

export const fetchActionMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchActionMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const actionMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
				if (isPage) {
					dispatch(fetchActionMoviesSuccess(actionMovies, isPage));
				} else dispatch(fetchActionMoviesSuccess(actionMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchActionMoviesFailure(errorMessage));
			});
	};
};

// Adventure
export const fetchAdventureMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_REQUEST,
});

export const fetchAdventureMoviesSuccess = (adventureMovies, isPage) => ({
	type: isPage
        ? moviesActionTypes.FETCH_ADVENTURE_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_ADVENTURE_MOVIES_SUCCESS,
	payload: adventureMovies,
});

export const fetchAdventureMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_ADVENTURE_MOVIES_FAILURE,
	payload: error,
});

export const fetchAdventureMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchAdventureMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const adventureMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchAdventureMoviesSuccess(adventureMovies, isPage));
                } else dispatch(fetchAdventureMoviesSuccess(adventureMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchAdventureMoviesFailure(errorMessage));
			});
	};
};

// SplashAnimation
export const fetchAnimationMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_ANIMATION_MOVIES_REQUEST,
});

export const fetchAnimationMoviesSuccess = (animationMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_ANIMATION_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_ANIMATION_MOVIES_SUCCESS,
	payload: animationMovies,
});

export const fetchAnimationMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_ANIMATION_MOVIES_FAILURE,
	payload: error,
});

export const fetchAnimationMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchAnimationMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const animationMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchAnimationMoviesSuccess(animationMovies, isPage));
                } else dispatch(fetchAnimationMoviesSuccess(animationMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchAnimationMoviesFailure(errorMessage));
			});
	};
};

// Comedy
export const fetchComedyMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST,
});

export const fetchComedyMoviesSuccess = (comedyMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_COMEDY_MOVIES_SUCCESS,
	payload: comedyMovies,
});

export const fetchComedyMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE,
	payload: error,
});

export const fetchComedyMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchComedyMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const comedyMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchComedyMoviesSuccess(comedyMovies, isPage));
                } else dispatch(fetchComedyMoviesSuccess(comedyMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchComedyMoviesFailure(errorMessage));
			});
	};
};

// Horror
export const fetchHorrorMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST,
});

export const fetchHorrorMoviesSuccess = (horrorMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_HORROR_MOVIES_SUCCESS,
	payload: horrorMovies,
});

export const fetchHorrorMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE,
	payload: error,
});

export const fetchHorrorMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchHorrorMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const horrorMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchHorrorMoviesSuccess(horrorMovies, isPage));
                } else dispatch(fetchHorrorMoviesSuccess(horrorMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchHorrorMoviesFailure(errorMessage));
			});
	};
};

// Netflix
export const fetchNetflixMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_NETFLIX_MOVIES_REQUEST,
});

export const fetchNetflixMoviesSuccess = (netflixMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_NETFLIX_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_NETFLIX_MOVIES_SUCCESS,
	payload: netflixMovies,
});

export const fetchNetflixMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_NETFLIX_MOVIES_FAILURE,
	payload: error,
});

export const fetchNetflixMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchNetflixMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const netflixMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchNetflixMoviesSuccess(netflixMovies, isPage));
                } else dispatch(fetchNetflixMoviesSuccess(netflixMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchNetflixMoviesFailure(errorMessage));
			});
	};
};

// Romance
export const fetchRomanceMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
});

export const fetchRomanceMoviesSuccess = (romanceMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_ROMANCE_MOVIES_SUCCESS,
	payload: romanceMovies,
});

export const fetchRomanceMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
	payload: error,
});

export const fetchRomanceMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchRomanceMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const romanceMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchRomanceMoviesSuccess(romanceMovies, isPage));
                } else dispatch(fetchRomanceMoviesSuccess(romanceMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchRomanceMoviesFailure(errorMessage));
			});
	};
};

// Top Rated
export const fetchTopRatedMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_REQUEST,
});

export const fetchTopRatedMoviesSuccess = (topRatedMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_TOP_RATED_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_TOP_RATED_MOVIES_SUCCESS,
	payload: topRatedMovies,
});

export const fetchTopRatedMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_TOP_RATED_MOVIES_FAILURE,
	payload: error,
});

export const fetchTopRatedMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchTopRatedMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const topRatedMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchTopRatedMoviesSuccess(topRatedMovies, isPage));
                } else dispatch(fetchTopRatedMoviesSuccess(topRatedMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchTopRatedMoviesFailure(errorMessage));
			});
	};
};

// Trending
export const fetchTrendingMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_TRENDING_MOVIES_REQUEST,
});

export const fetchTrendingMoviesSuccess = (trendingMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_TRENDING_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_TRENDING_MOVIES_SUCCESS,
	payload: trendingMovies,
});

export const fetchTrendingMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_TRENDING_MOVIES_FAILURE,
	payload: error,
});

export const fetchTrendingMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchTrendingMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const trendingMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchTrendingMoviesSuccess(trendingMovies, isPage));
                } else dispatch(fetchTrendingMoviesSuccess(trendingMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchTrendingMoviesFailure(errorMessage));
			});
	};
};

// Upcoming
export const fetchUpcomingMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_UPCOMING_MOVIES_REQUEST,
});

export const fetchUpcomingMoviesSuccess = (upcomingMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_UPCOMING_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_UPCOMING_MOVIES_SUCCESS,
	payload: upcomingMovies,
});

export const fetchUpcomingTrendingMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_UPCOMING_MOVIES_FAILURE,
	payload: error,
});

export const fetchUpcomingMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchUpcomingMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const upcomingMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchUpcomingMoviesSuccess(upcomingMovies, isPage));
                } else dispatch(fetchUpcomingMoviesSuccess(upcomingMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchUpcomingTrendingMoviesFailure(errorMessage));
			});
	};
};

// Latest
export const fetchLatestMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_LATEST_MOVIES_REQUEST,
});

export const fetchLatestMoviesSuccess = (latestMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_LATEST_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_LATEST_MOVIES_SUCCESS,
	payload: latestMovies,
});

export const fetchLatestTrendingMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_LATEST_MOVIES_FAILURE,
	payload: error,
});

export const fetchLatestMoviesAsync = (fetchUrl, isPage) => {
	return dispatch => {
		dispatch(fetchLatestMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const latestMovies = res.data.results.map(el => ({
					...el,
					isFavourite: false,
				}));
                if (isPage) {
                    dispatch(fetchLatestMoviesSuccess(latestMovies, isPage));
                } else dispatch(fetchLatestMoviesSuccess(latestMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchLatestTrendingMoviesFailure(errorMessage));
			});
	};
};
