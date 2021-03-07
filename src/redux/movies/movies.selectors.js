import { createSelector } from "reselect";

const selectActionMovies = state => state.movies.actionMovies;
const selectAdventureMovies = state => state.movies.adventureMovies;
const selectComedyMovies = state => state.movies.comedyMovies;
const selectHorrorMovies = state => state.movies.horrorMovies;
const selectNetflixMovies = state => state.movies.netflixOriginalMovies;
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
    netflixOriginalMovies => netflixOriginalMovies.netflixOriginalMovies
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