import { combineReducers } from "redux";
import * as allReducers from "./all.reducers";

export default combineReducers({
    comedyMovies: allReducers.comedyMoviesReducer,
    horrorMovies: allReducers.horrorMoviesReducer,
    bannerMovies: allReducers.bannerMoviesReducer,
    bannerCartoons: allReducers.bannerCartoonsReducer,
    bannerClassics: allReducers.bannerClassicsReducer,
    featuredMovies: allReducers.featuredMoviesReducer,
    // Generic Cartoons
    genericCartoons: allReducers.genericCartoonsMoviesReducer,
    // Generic Movies
    genericMovies: allReducers.genericMoviesMoviesReducer,
    // Chaplin
    chaplinMovies: allReducers.chaplinMoviesReducer,
    // The Three Stooges
    threeStoogesMovies: allReducers.threeStoogesMoviesReducer,
    // Romance
    romanceMovies: allReducers.romanceMoviesReducer,
    // Popeye
    popeyeMovies: allReducers.popeyeMoviesReducer,
    // Funny
    funnyMovies: allReducers.funnyMoviesReducer,
    // Drama
    dramaMovies: allReducers.dramaMoviesReducer,
    // Others
    othersMovies: allReducers.othersMoviesReducer,
    // Looney
    looneyMovies: allReducers.looneyMoviesReducer,
    // Superman
    supermanMovies: allReducers.supermanMoviesReducer,
    // Betty
    bettyMovies: allReducers.bettyMoviesReducer,
    // Oswald
    oswaldMovies: allReducers.oswaldMoviesReducer,
    // Merrie
    merrieMovies: allReducers.merrieMoviesReducer,
    // Other Cartoons:
    otherCartoonsMovies: allReducers.otherCartoonsMoviesReducer,
    // Avant
    avantMovies: allReducers.avantMoviesReducer,
    // Crime
    crimeMovies: allReducers.crimeMoviesReducer,
    // Fantasy
    fantasyMovies: allReducers.fantasyMoviesReducer,
    // Science
    scienceMovies: allReducers.scienceMoviesReducer,
    // Western
    westernMovies: allReducers.westernMoviesReducer,
})