import { combineReducers } from "redux";
import actionMoviesReducer from "./action.reducer";
import adventureMoviesReducer from "./adventure.reducer";
import comedyMoviesReducer from "./comedy.reducer";
import horrorMoviesReducer from "./horror.reducer";
import netflixMoviesReducer from "./netflix.reducer";
import romanceMoviesReducer from "./romance.reducer";
import topRatedMoviesReducer from "./topRated.reducer";
import trendingMoviesReducer from "./trending.reducer";
import animationMoviesReducer from './animation.reducer';
import upcomingMoviesReducer from './upcoming.reducer';
import latestReleasedMoviesReducer from "./latestReleased.reducer";

export default combineReducers({
    actionMovies: actionMoviesReducer,
    adventureMovies: adventureMoviesReducer,
    animationMovies: animationMoviesReducer,
    comedyMovies: comedyMoviesReducer,
    horrorMovies: horrorMoviesReducer,
    netflixMovies: netflixMoviesReducer,
    romanceMovies: romanceMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer,
    upcomingMovies: upcomingMoviesReducer,
    latestMovies: latestReleasedMoviesReducer
})