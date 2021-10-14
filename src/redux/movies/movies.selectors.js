import { createSelector } from "reselect";

export const selectComedyMovies = state => state.movies.comedyMovies;
export const selectHorrorMovies = state => state.movies.horrorMovies;
export const selectBannerMovies = state => state.movies.bannerMovies;
export const selectFeaturedMovies = state => state.movies.featuredMovies;

export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.data
)

export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.data
)

export const selectBannerMoviesSelector = createSelector(
  [selectBannerMovies],
  bannerMovies => bannerMovies.data
)

export const selectFeaturedMoviesSelector = createSelector(
  [selectFeaturedMovies],
  featuredMovies => featuredMovies.data
)
