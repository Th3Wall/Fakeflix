import { combineReducers } from "redux";
import genreReducer from "./genre.reducer";
import actionMoviesReducer from "./reducers/action.reducer";
import adventureMoviesReducer from "./reducers/adventure.reducer";
import comedyMoviesReducer from "./reducers/comedy.reducer";
import horrorMoviesReducer from "./reducers/horror.reducer";
import netflixMoviesReducer from "./reducers/netflix.reducer";
import romanceMoviesReducer from "./reducers/romance.reducer";
import topRatedMoviesReducer from "./reducers/topRated.reducer";
import trendingMoviesReducer from "./reducers/trending.reducer";
import animationMoviesReducer from './reducers/animation.reducer';

export default combineReducers({
    currentGenre: genreReducer,
    actionMovies: actionMoviesReducer,
    adventureMovies: adventureMoviesReducer,
    animationMovies: animationMoviesReducer,
    comedyMovies: comedyMoviesReducer,
    horrorMovies: horrorMoviesReducer,
    netflixMovies: netflixMoviesReducer,
    romanceMovies: romanceMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    trendingMovies: trendingMoviesReducer
})