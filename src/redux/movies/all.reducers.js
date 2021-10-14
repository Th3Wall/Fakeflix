import { moviesActionTypes } from './movies.types';

const genericSwitch = (state, type, payload, typeRequest, typeSuccess, typeMore, typeFail) => {
  switch (type) {
    case typeRequest:
        return {
            ...state,
            loading: true
        }
    case typeSuccess:
        return {
            ...state,
            data: payload,
            loading: false,
            error: ''
        }
    case typeMore:
        return {
            ...state,
            data: [...state.data, ...payload],
            loading: false,
            error: ''
        }
    case typeFail:
        return {
            ...state,
            data: [],
            loading: false,
            error: payload
        }
    default:
        return state;
}
}

const initialStateHorror = {
    loading: false,
    error: '',
    data: []
}

export const horrorMoviesReducer = (state = initialStateHorror, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_HORROR_MOVIES_REQUEST,
    moviesActionTypes.FETCH_HORROR_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_HORROR_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_HORROR_MOVIES_FAILURE
  )
}

const initialStateBanner = {
  loading: false,
  error: '',
  data: []
}

export const bannerMoviesReducer = (state = initialStateBanner, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_BANNER_MOVIES_FAILURE
  )
}

const initialStateBannerCartoons = {
  loading: false,
  error: '',
  data: []
}

export const bannerCartoonsReducer = (state = initialStateBannerCartoons, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_CARTOON_MORE_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CARTOON_BANNER_MOVIES_FAILURE
  )
}


const initialStateBannerClassics = {
  loading: false,
  error: '',
  data: []
}

export const bannerClassicsReducer = (state = initialStateBannerClassics, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_CLASSICS_MORE_BANNER_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CLASSICS_BANNER_MOVIES_FAILURE
  )
}


const initialStateComedy = {
  loading: false,
  error: '',
  data: []
}

export const comedyMoviesReducer = (state = initialStateComedy, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_COMEDY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_COMEDY_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_COMEDY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_COMEDY_MOVIES_FAILURE
  )
}

const initialStateFeatured = {
  loading: false,
  error: '',
  data: []
}

export const featuredMoviesReducer = (state = initialStateFeatured, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_FEATURED_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FEATURED_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_FEATURED_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FEATURED_MOVIES_FAILURE
  )
}

// Generic Cartoons
const initialStateGenericCartoons = {
  loading: false,
  error: '',
  data: []
}

export const genericCartoonsMoviesReducer = (state = initialStateGenericCartoons, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_REQUEST,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_SUCCESS,
    moviesActionTypes.LOAD_MORE_GENERIC_CARTOONS_SUCCESS,
    moviesActionTypes.FETCH_GENERIC_CARTOONS_FAILURE
  )
}

// Generic Movies
const initialStateGenericMovies = {
  loading: false,
  error: '',
  data: []
}

export const genericMoviesMoviesReducer = (state = initialStateGenericMovies, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_GENERIC_MOVIES_REQUEST,
    moviesActionTypes.FETCH_GENERIC_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_GENERIC_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_GENERIC_MOVIES_FAILURE
  )
}

// Chaplin
const initialStateChaplin = {
  loading: false,
  error: '',
  data: []
}

export const chaplinMoviesReducer = (state = initialStateChaplin, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_CHAPLIN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CHAPLIN_MOVIES_FAILURE
  )
}

// The Three Stooges
const initialStateThreeStooges = {
  loading: false,
  error: '',
  data: []
}

export const threeStoogesMoviesReducer = (state = initialStateThreeStooges, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_REQUEST,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_THREE_STOOGES_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_THREE_STOOGES_MOVIES_FAILURE
  )
}

// Romance
const initialStateRomance = {
  loading: false,
  error: '',
  data: []
}

export const romanceMoviesReducer = (state = initialStateRomance, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_ROMANCE_STOOGES_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_ROMANCE_MOVIES_FAILURE
  )
}

// Popeye
const initialStatePopeye = {
  loading: false,
  error: '',
  data: []
}

export const popeyeMoviesReducer = (state = initialStatePopeye, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_POPEYE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_POPEYE_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_POPEYE_STOOGES_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_POPEYE_MOVIES_FAILURE
  )
}

// Funny
const initialStateFunny = {
  loading: false,
  error: '',
  data: []
}

export const funnyMoviesReducer = (state = initialStateFunny, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_FUNNY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FUNNY_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_FUNNY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FUNNY_MOVIES_FAILURE
  )
}

// Drama
const initialStateDrama = {
  loading: false,
  error: '',
  data: []
}

export const dramaMoviesReducer = (state = initialStateDrama, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_DRAMA_MOVIES_REQUEST,
    moviesActionTypes.FETCH_DRAMA_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_DRAMA_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_DRAMA_MOVIES_FAILURE
  )
}

// Others
const initialStateOthers = {
  loading: false,
  error: '',
  data: []
}

export const othersMoviesReducer = (state = initialStateOthers, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_OTHERS_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OTHERS_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_OTHERS_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OTHERS_MOVIES_FAILURE
  )
}

// Looney
const initialStateLooney = {
  loading: false,
  error: '',
  data: []
}

export const looneyMoviesReducer = (state = initialStateLooney, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_LOONEY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_LOONEY_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_LOONEY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_LOONEY_MOVIES_FAILURE
  )
}

// Superman
const initialStateSuperman = {
  loading: false,
  error: '',
  data: []
}

export const supermanMoviesReducer = (state = initialStateSuperman, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_SUPERMAN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_SUPERMAN_MOVIES_FAILURE
  )
}

// Betty
const initialStateBetty = {
  loading: false,
  error: '',
  data: []
}

export const bettyMoviesReducer = (state = initialStateBetty, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_BETTY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_BETTY_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_BETTY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_BETTY_MOVIES_FAILURE
  )
}

// Oswald
const initialStateOswald = {
  loading: false,
  error: '',
  data: []
}

export const oswaldMoviesReducer = (state = initialStateOswald, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_OSWALD_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OSWALD_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_OSWALD_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OSWALD_MOVIES_FAILURE
  )
}

// Merrie
const initialStateMerrie = {
  loading: false,
  error: '',
  data: []
}

export const merrieMoviesReducer = (state = initialStateMerrie, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_MERRIE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_MERRIE_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_MERRIE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_MERRIE_MOVIES_FAILURE
  )
}

// Other Cartoons:
const initialStateOtherCartoons = {
  loading: false,
  error: '',
  data: []
}

export const otherCartoonsMoviesReducer = (state = initialStateOtherCartoons, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_REQUEST,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_OTHERS_CARTOONS_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_OTHERS_CARTOONS_MOVIES_FAILURE
  )
}

// Avant
const initialStateAvant = {
  loading: false,
  error: '',
  data: []
}

export const avantMoviesReducer = (state = initialStateAvant, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_AVANT_MOVIES_REQUEST,
    moviesActionTypes.FETCH_AVANT_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_AVANT_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_AVANT_MOVIES_FAILURE
  )
}

// Crime
const initialStateCrime = {
  loading: false,
  error: '',
  data: []
}

export const crimeMoviesReducer = (state = initialStateCrime, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_CRIME_MOVIES_REQUEST,
    moviesActionTypes.FETCH_CRIME_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_CRIME_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_CRIME_MOVIES_FAILURE
  )
}

// Fantasy
const initialStateFantasy = {
  loading: false,
  error: '',
  data: []
}

export const fantasyMoviesReducer = (state = initialStateFantasy, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_FANTASY_MOVIES_REQUEST,
    moviesActionTypes.FETCH_FANTASY_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_FANTASY_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_FANTASY_MOVIES_FAILURE
  )
}

// Science
const initialStateScience = {
  loading: false,
  error: '',
  data: []
}

export const scienceMoviesReducer = (state = initialStateScience, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_REQUEST,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_SCIENCE_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_SCIENCE_MOVIES_FAILURE
  )
}

// Western
const initialStateWestern = {
  loading: false,
  error: '',
  data: []
}

export const westernMoviesReducer = (state = initialStateWestern, {type, payload}) => {
  return genericSwitch(
    state,
    type, payload,
    moviesActionTypes.FETCH_WESTERN_MOVIES_REQUEST,
    moviesActionTypes.FETCH_WESTERN_MOVIES_SUCCESS,
    moviesActionTypes.LOAD_MORE_WESTERN_MOVIES_SUCCESS,
    moviesActionTypes.FETCH_WESTERN_MOVIES_FAILURE
  )
}