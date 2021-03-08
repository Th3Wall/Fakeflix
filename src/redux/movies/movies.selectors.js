import { createSelector } from "reselect";

const selectActionMovies = state => state.movies.actionMovies;
const selectAdventureMovies = state => state.movies.adventureMovies;
const selectAnimationMovies = state => state.movies.animationMovies;
const selectComedyMovies = state => state.movies.comedyMovies;
const selectHorrorMovies = state => state.movies.horrorMovies;
const selectNetflixMovies = state => state.movies.netflixMovies;
const selectRomanceMovies = state => state.movies.romanceMovies;
const selectTopRatedMovies = state => state.movies.topRatedMovies;
const selectTrendingMovies = state => state.movies.trendingMovies;

export const selectActionMoviesSelector = createSelector(
    [selectActionMovies],
    actionMovies => actionMovies.actionMovies
)

export const selectAdventureMoviesSelector = createSelector(
    [selectAdventureMovies],
    adventureMovies => adventureMovies.adventureMovies
)

export const selectAnimationMoviesSelector = createSelector(
    [selectAnimationMovies],
    animationMovies => animationMovies.animationMovies
)

export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.comedyMovies
)

export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.horrorMovies
)

export const selectNetflixMoviesSelector = createSelector(
    [selectNetflixMovies],
    netflixMovies => netflixMovies.netflixMovies
)

export const selectRomanceMoviesSelector = createSelector(
    [selectRomanceMovies],
    romanceMovies => romanceMovies.romanceMovies
)

export const selectTopRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    topRatedMovies => topRatedMovies.topRatedMovies
)

export const selectTrendingMoviesSelector = createSelector(
    [selectTrendingMovies],
    trendingMovies => trendingMovies.trendingMovies
)