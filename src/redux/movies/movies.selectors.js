import { createSelector } from "reselect";

export const selectComedyMovies = state => state.movies.comedyMovies;
export const selectComedyMoviesSelector = createSelector(
    [selectComedyMovies],
    comedyMovies => comedyMovies.data
)

export const selectHorrorMovies = state => state.movies.horrorMovies;
export const selectHorrorMoviesSelector = createSelector(
    [selectHorrorMovies],
    horrorMovies => horrorMovies.data
)

export const selectBannerMovies = state => state.movies.bannerMovies;
export const selectBannerMoviesSelector = createSelector(
  [selectBannerMovies],
  bannerMovies => bannerMovies.data
)

export const selectBannerCartoons = state => state.movies.bannerCartoons;
export const selectBannerCartoonsSelector = createSelector(
  [selectBannerCartoons],
  bannerCartoons => bannerCartoons.data
)

export const selectBannerClassics = state => state.movies.bannerClassics;
export const selectBannerClassicsSelector = createSelector(
  [selectBannerClassics],
  bannerClassics => bannerClassics.data
)

export const selectFeaturedMovies = state => state.movies.featuredMovies;
export const selectFeaturedMoviesSelector = createSelector(
  [selectFeaturedMovies],
  featuredMovies => featuredMovies.data
)


export const selectGenericCartoons = state => state.movies.genericCartoons;
export const selectGenericCartoonsSelector = createSelector(
  [selectGenericCartoons],
  genericCartoons => genericCartoons.data
)

export const selectGenericMovies = state => state.movies.genericMovies;
export const selectGenericMoviesSelector = createSelector(
  [selectGenericMovies],
  genericMovies => genericMovies.data
)

export const selectChaplinMovies = state => state.movies.chaplinMovies;
export const selectChaplinMoviesSelector = createSelector(
  [selectChaplinMovies],
  chaplinMovies => chaplinMovies.data
)

export const selectThreeStoogesMovies = state => state.movies.threeStoogesMovies;
export const selectThreeStoogesMoviesSelector = createSelector(
  [selectThreeStoogesMovies],
  threeStoogesMovies => threeStoogesMovies.data
)

export const selectRomanceMovies = state => state.movies.romanceMovies;
export const selectRomanceMoviesSelector = createSelector(
  [selectRomanceMovies],
  romanceMovies => romanceMovies.data
)

export const selectPopeyeMovies = state => state.movies.popeyeMovies;
export const selectPopeyeMoviesSelector = createSelector(
  [selectPopeyeMovies],
  popeyeMovies => popeyeMovies.data
)

export const selectFunnyMovies = state => state.movies.funnyMovies;
export const selectFunnyMoviesSelector = createSelector(
  [selectFunnyMovies],
  funnyMovies => funnyMovies.data
)

export const selectDramaMovies = state => state.movies.dramaMovies;
export const selectDramaMoviesSelector = createSelector(
  [selectDramaMovies],
  dramaMovies => dramaMovies.data
)

export const selectOthersMovies = state => state.movies.othersMovies;
export const selectOthersMoviesSelector = createSelector(
  [selectOthersMovies],
  othersMovies => othersMovies.data
)

export const selectLooneyMovies = state => state.movies.looneyMovies;
export const selectLooneyMoviesSelector = createSelector(
  [selectLooneyMovies],
  looneyMovies => looneyMovies.data
)

export const selectSupermanMovies = state => state.movies.supermanMovies;
export const selectSupermanMoviesSelector = createSelector(
  [selectSupermanMovies],
  supermanMovies => supermanMovies.data
)

export const selectBettyMovies = state => state.movies.bettyMovies;
export const selectBettyMoviesSelector = createSelector(
  [selectBettyMovies],
  bettyMovies => bettyMovies.data
)

export const selectOswaldMovies = state => state.movies.oswaldMovies;
export const selectOswaldMoviesSelector = createSelector(
  [selectOswaldMovies],
  oswaldMovies => oswaldMovies.data
)

export const selectMerrieMovies = state => state.movies.merrieMovies;
export const selectMerrieMoviesSelector = createSelector(
  [selectMerrieMovies],
  merrieMovies => merrieMovies.data
)

export const selectOtherCartoonsMovies = state => state.movies.otherCartoonsMovies;
export const selectOtherCartoonsMoviesSelector = createSelector(
  [selectOtherCartoonsMovies],
  otherCartoonsMovies => otherCartoonsMovies.data
)

export const selectAvantMovies = state => state.movies.avantMovies;
export const selectAvantMoviesSelector = createSelector(
  [selectAvantMovies],
  avantMovies => avantMovies.data
)

export const selectCrimeMovies = state => state.movies.crimeMovies;
export const selectCrimeMoviesSelector = createSelector(
  [selectCrimeMovies],
  crimeMovies => crimeMovies.data
)

export const selectFantasyMovies = state => state.movies.fantasyMovies;
export const selectFantasyMoviesSelector = createSelector(
  [selectFantasyMovies],
  fantasyMovies => fantasyMovies.data
)

export const selectScienceMovies = state => state.movies.scienceMovies;
export const selectScienceMoviesSelector = createSelector(
  [selectScienceMovies],
  scienceMovies => scienceMovies.data
)

export const selectWesternMovies = state => state.movies.westernMovies;
export const selectWesternMoviesSelector = createSelector(
  [selectWesternMovies],
  westernMovies => westernMovies.data
)