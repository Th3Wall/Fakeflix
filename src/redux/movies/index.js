import { combineReducers } from "redux";
import comedyMoviesReducer from "./comedy.reducer";
import horrorMoviesReducer from "./horror.reducer";
import bannerMoviesReducer from "./banner.reducer";
import featuredMoviesReducer from "./featured.reducer";

export default combineReducers({
    comedyMovies: comedyMoviesReducer,
    horrorMovies: horrorMoviesReducer,
    bannerMovies: bannerMoviesReducer,
    featuredMovies: featuredMoviesReducer,
})