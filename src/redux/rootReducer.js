import { combineReducers } from "redux"

// User
import userReducer from "./user/user.reducer"

// Movies
import topRatedMoviesReducer from './movies/topRated.reducer';
import trendingMoviesReducer from './movies/trending.reducer';
import netflixOriginalMoviesReducer from './movies/netflixOriginals.reducer';
import actionMoviesReducer from './movies/action.reducer';
import adventureMoviesReducer from './movies/adventure.reducer';
import comedyMoviesReducer from './movies/comedy.reducer';
import romanceMoviesReducer from './movies/romance.reducer';
import horrorMoviesReducer from './movies/horror.reducer';

export default combineReducers({
    user: userReducer,
    topRatedMovies: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer,
    netflixOriginalMovies: netflixOriginalMoviesReducer,
    actionMovies: actionMoviesReducer,
    adventureMovies: adventureMoviesReducer,
    comedyMovies: comedyMoviesReducer,
    romanceMovies: romanceMoviesReducer,
    horrorMovies: horrorMoviesReducer
})
