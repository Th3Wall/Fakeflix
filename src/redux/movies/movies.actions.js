import { moviesActionTypes } from "./movies.types";
import { fetchContentAsync } from "../utils"

// Comedy
export const fetchComedyMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_COMEDY_MOVIES_SUCCESS
  )
};

// Horror
export const fetchHorrorMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST,
    moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_HORROR_MOVIES_SUCCESS
  )
};

// Timeless Classics 
export const fetchFeaturedMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_FEATURED_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FEATURED_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FEATURED_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_FEATURED_MOVIES_SUCCESS,
    true
  )
};

// Banner Home
export const fetchBannerMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_BANNER_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_BANNER_MOVIES_SUCCESS
  )
};

export const fetchBannerCartoonsAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_FAILURE,
    moviesActionTypes.LOAD_CARTOON_MORE_BANNER_MOVIES_SUCCESS
  )
};

export const fetchBannerClassicsAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_FAILURE,
    moviesActionTypes.LOAD_CLASSICS_MORE_BANNER_MOVIES_SUCCESS
  )
};

// Generic Cartoons
export const fetchGenericCartoonsMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_REQUEST,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_SUCCESS,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_FAILURE,
    moviesActionTypes.LOAD_MORE_GENERIC_CARTOONS_SUCCESS
  )
};

// Generic Movies
export const fetchGenericMoviesMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_GENERIC_MOVIES_REQUEST,
    moviesActionTypes.FETCH_GENERIC_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_GENERIC_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_GENERIC_MOVIES_SUCCESS
  )
};

// Chaplin
export const fetchChaplinMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_CHAPLIN_MOVIES_SUCCESS
  )
};

// The Three Stooges
export const fetchThreeStoogesMoviesAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_REQUEST,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_THREE_STOOGES_MOVIES_SUCCESS
  )
};

// Romance
export const fetchRomanceAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_ROMANCE_STOOGES_MOVIES_SUCCESS
  )
};

// Popeye
export const fetchPopeyeAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_POPEYE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_POPEYE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_POPEYE_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_POPEYE_STOOGES_MOVIES_SUCCESS
  )
};

// Funny
export const fetchFunnyAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_FUNNY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FUNNY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FUNNY_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_FUNNY_MOVIES_SUCCESS
  )
};

// Drama
export const fetchDramaAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_DRAMA_MOVIES_REQUEST,
    moviesActionTypes.FETCH_DRAMA_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_DRAMA_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_DRAMA_MOVIES_SUCCESS
  )
};

// Others
export const fetchOthersAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_OTHERS_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OTHERS_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OTHERS_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_OTHERS_MOVIES_SUCCESS
  )
};

// Looney Tunes
export const fetchLooneyAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_LOONEY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_LOONEY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_LOONEY_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_LOONEY_MOVIES_SUCCESS
  )
};

// Superman
export const fetchSupermanAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_SUPERMAN_MOVIES_SUCCESS
  )
};

// Betty
export const fetchBettyAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_BETTY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_BETTY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_BETTY_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_BETTY_MOVIES_SUCCESS
  )
};

// Oswald
export const fetchOswaldAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_OSWALD_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OSWALD_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OSWALD_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_OSWALD_MOVIES_SUCCESS
  )
};

// Merrie Melodies
export const fetchMerrieAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_MERRIE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_MERRIE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_MERRIE_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_MERRIE_MOVIES_SUCCESS
  )
};

// Other Cartoons:
export const fetchOthersCartoonsAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_OTHERS_CARTOONS_MOVIES_SUCCESS
  )
};

// Avant
export const fetchAvantAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_AVANT_MOVIES_REQUEST,
    moviesActionTypes.FETCH_AVANT_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_AVANT_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_AVANT_MOVIES_SUCCESS
  )
};

// Crime
export const fetchCrimeAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_CRIME_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CRIME_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CRIME_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_CRIME_MOVIES_SUCCESS
  )
};

// Fantasy
export const fetchFantasyAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_FANTASY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FANTASY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FANTASY_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_FANTASY_MOVIES_SUCCESS
  )
};

// Science
export const fetchScienceAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_SCIENCE_MOVIES_SUCCESS
  )
};

// Western
export const fetchWesternAsync = (fetchUrl, isPage) => {
  return fetchContentAsync(
    fetchUrl,
    isPage,
    moviesActionTypes.FETCH_WESTERN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_WESTERN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_WESTERN_MOVIES_FAILURE,
    moviesActionTypes.LOAD_MORE_WESTERN_MOVIES_SUCCESS
  )
};