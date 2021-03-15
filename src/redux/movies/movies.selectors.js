import { createSelector } from "reselect";

export const selectActionMovies = state => state.movies.actionMovies;
export const selectAdventureMovies = state => state.movies.adventureMovies;
export const selectAnimationMovies = state => state.movies.animationMovies;
export const selectComedyMovies = state => state.movies.comedyMovies;
export const selectHorrorMovies = state => state.movies.horrorMovies;
export const selectNetflixMovies = state => state.movies.netflixMovies;
export const selectRomanceMovies = state => state.movies.romanceMovies;
export const selectTopRatedMovies = state => state.movies.topRatedMovies;
export const selectTrendingMovies = state => state.movies.trendingMovies;
export const selectUpcomingMovies = state => state.movies.upcomingMovies;

export const selectActionMoviesSelector = createSelector(
    [selectActionMovies],
    actionMovies => actionMovies.movies
)

export const selectAdventureMoviesSelector = createSelector(
    [selectAdventureMovies],
    adventureMovies => adventureMovies.movies
)

export const selectAnimationMoviesSelector = createSelector(
    [selectAnimationMovies],
    animationMovies => animationMovies.movies
)

export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.movies
)

export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.movies
)

export const selectNetflixMoviesSelector = createSelector(
    [selectNetflixMovies],
    netflixMovies => netflixMovies.movies
)

export const selectRomanceMoviesSelector = createSelector(
    [selectRomanceMovies],
    romanceMovies => romanceMovies.movies
)

export const selectTopRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    topRatedMovies => topRatedMovies.movies
)

export const selectTrendingMoviesSelector = createSelector(
    [selectTrendingMovies],
    trendingMovies => trendingMovies.movies
)

export const selectUpcomingMoviesSelector = createSelector(
    [selectUpcomingMovies],
    upcomingMovies => upcomingMovies.movies
)