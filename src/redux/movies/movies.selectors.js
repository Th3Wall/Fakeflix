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
export const selectLatestMovies = state => state.movies.latestMovies;

export const selectActionMoviesSelector = createSelector(
    [selectActionMovies],
    actionMovies => actionMovies.data
)

export const selectAdventureMoviesSelector = createSelector(
    [selectAdventureMovies],
    adventureMovies => adventureMovies.data
)

export const selectAnimationMoviesSelector = createSelector(
    [selectAnimationMovies],
    animationMovies => animationMovies.data
)

export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.data
)

export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.data
)

export const selectNetflixMoviesSelector = createSelector(
    [selectNetflixMovies],
    netflixMovies => netflixMovies.data
)

export const selectRomanceMoviesSelector = createSelector(
    [selectRomanceMovies],
    romanceMovies => romanceMovies.data
)

export const selectTopRatedMoviesSelector = createSelector(
    [selectTopRatedMovies],
    topRatedMovies => topRatedMovies.data
)

export const selectTrendingMoviesSelector = createSelector(
    [selectTrendingMovies],
    trendingMovies => trendingMovies.data
)

export const selectUpcomingMoviesSelector = createSelector(
    [selectUpcomingMovies],
    upcomingMovies => upcomingMovies.data
)

export const selectLatestMoviesSelector = createSelector(
    [selectLatestMovies],
    latestMovies => latestMovies.data
)