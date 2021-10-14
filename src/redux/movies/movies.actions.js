import axios from "../../axiosInstance";
import { moviesActionTypes } from "./movies.types";

const reduceJWItem = (data, isLarge = false) => {
	return { 
    id: data.mediaid,
    title: data.title,
    overview: data.description,
    original_name: '',
    original_title: '',
    name: '',
    genre_ids: [],
    poster_path: data.image,
    backdrop_path: data.image,
    release_date: data['Release Date'], 
    cast: data['Cast'], 
    status: data['Status'],  
    genres: data['Genres'],  
    link: data.link,
    isLarge
  }
};

export const fetchGenericMoviesAsync = (fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure, fetchUrl, isPage, isLarge = false) => {
	return dispatch => {
		dispatch(fetchMoviesRequest());
		axios
			.get(fetchUrl)
			.then(res => {
				const comedyMovies = res.data.playlist.map(el => ({
					...reduceJWItem(el, isLarge),
					isFavourite: false,
				}));
        if (isPage) {
            dispatch(fetchMoviesSuccess(comedyMovies, isPage));
        } else dispatch(fetchMoviesSuccess(comedyMovies));
			})
			.catch(error => {
				const errorMessage = error.message;
				dispatch(fetchMoviesFailure(errorMessage));
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
  return fetchGenericMoviesAsync(
    fetchComedyMoviesRequest,
    fetchComedyMoviesSuccess,
    fetchComedyMoviesFailure,
    fetchUrl,
    isPage
  )
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
  return fetchGenericMoviesAsync(
    fetchHorrorMoviesRequest,
    fetchHorrorMoviesSuccess,
    fetchHorrorMoviesFailure,
    fetchUrl,
    isPage
  )
};

// Timesless Classics 
export const fetchFeaturedMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_FEATURED_MOVIES_REQUEST,
});

export const fetchFeaturedMoviesSuccess = (horrorMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_FEATURED_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_FEATURED_MOVIES_SUCCESS,
	payload: horrorMovies,
});

export const fetchFeaturedMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_FEATURED_MOVIES_FAILURE,
	payload: error,
});

export const fetchFeaturedMoviesAsync = (fetchUrl, isPage) => {
  return fetchGenericMoviesAsync(
    fetchFeaturedMoviesRequest,
    fetchFeaturedMoviesSuccess,
    fetchFeaturedMoviesFailure,
    fetchUrl,
    isPage,
    true
  )
};


// Banner
export const fetchBannerMoviesRequest = () => ({
	type: moviesActionTypes.FETCH_BANNER_MOVIES_REQUEST,
});

export const fetchBannerMoviesSuccess = (bannerMovies, isPage) => ({
    type: isPage
        ? moviesActionTypes.FETCH_BANNER_MOVIES_SUCCESS
        : moviesActionTypes.LOAD_MORE_BANNER_MOVIES_SUCCESS,
	payload: bannerMovies,
});

export const fetchBannerMoviesFailure = error => ({
	type: moviesActionTypes.FETCH_BANNER_MOVIES_FAILURE,
	payload: error,
});

export const fetchBannerMoviesAsync = (fetchUrl, isPage) => {
  return fetchGenericMoviesAsync(
    fetchBannerMoviesRequest,
    fetchBannerMoviesSuccess,
    fetchBannerMoviesFailure,
    fetchUrl,
    isPage
  )
};

