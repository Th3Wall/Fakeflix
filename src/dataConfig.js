import requests from "./requests";
import * as movieSelectors from "./redux/movies/movies.selectors";
import * as movieActions from "./redux/movies/movies.actions";

export const fetchHomeDataConfig = [
	{
		id: 1,
		thunk: movieActions.fetchGenericCartoonsMoviesAsync,
		url: requests.cartoons,
		title: "Cartoons",
		genre: "cartoon",
		selector: movieSelectors.selectGenericCartoons,
	},
  {
		id: 2,
		thunk: movieActions.fetchGenericMoviesMoviesAsync,
		url: requests.movies,
		title: "Movies",
		genre: "movies",
		selector: movieSelectors.selectGenericMovies,
	},
  {
		id: 3,
		thunk: movieActions.fetchFeaturedMoviesAsync,
		url: requests.fetchFeatureMovies,
		title: "Timeless Classics",
		genre: "featured",
		selector: movieSelectors.selectFeaturedMovies,
	},
  {
		id: 4,
		thunk: movieActions.fetchChaplinMoviesAsync,
		url: requests.chaplin,
		title: "Charlie Chaplin",
		genre: "chaplin",
		selector: movieSelectors.selectChaplinMovies,
	},
  {
		id: 5,
		thunk: movieActions.fetchThreeStoogesMoviesAsync,
		url: requests.threeStooges,
		title: "The Three Stooges",
		genre: "stooges",
		selector: movieSelectors.selectThreeStoogesMovies,
	},

  {
		id: 6,
		thunk: movieActions.fetchRomanceAsync,
		url: requests.romance,
		title: "Romance",
		genre: "romance",
		selector: movieSelectors.selectRomanceMovies,
	},

  {
		id: 7,
		thunk: movieActions.fetchPopeyeAsync,
		url: requests.popeye,
		title: "Popeye",
		genre: "popeye",
		selector: movieSelectors.selectPopeyeMovies,
	},

  {
		id: 8,
		thunk: movieActions.fetchFunnyAsync,
		url: requests.funny,
		title: "Funny",
		genre: "funny",
		selector: movieSelectors.selectFunnyMovies,
	},

  {
		id: 9,
		thunk: movieActions.fetchDramaAsync,
		url: requests.drama,
		title: "Drama",
		genre: "drama",
		selector: movieSelectors.selectDramaMovies,
	},

  {
		id: 10,
		thunk: movieActions.fetchOthersAsync,
		url: requests.others,
		title: "Others",
		genre: "others",
		selector: movieSelectors.selectOthersMovies,
	},
];

export const fetchCartoonsDataConfig = [
	{
		id: 1,
		thunk: movieActions.fetchPopeyeAsync,
		url: requests.popeye,
		title: "Popeye",
		genre: "popeye",
		selector: movieSelectors.selectPopeyeMovies,
	},
  {
		id: 2,
		thunk: movieActions.fetchLooneyAsync,
		url: requests.looney,
		title: "Looney Tunes & Co.",
		genre: "looney",
		selector: movieSelectors.selectLooneyMovies,
	},
	{
		id: 3,
		thunk: movieActions.fetchSupermanAsync,
		url: requests.superman,
		title: "Superman",
		genre: "superman",
		selector: movieSelectors.selectSupermanMovies,
	},
  {
		id: 4,
		thunk: movieActions.fetchBettyAsync,
		url: requests.betty,
		title: "Betty Boop",
		genre: "betty",
		selector: movieSelectors.selectBettyMovies,
	},
	{
		id: 5,
		thunk: movieActions.fetchOswaldAsync,
		url: requests.oswald,
		title: "Oswald and Felix",
		genre: "oswald",
		selector: movieSelectors.selectOswaldMovies,
	},
	{
		id: 7,
		thunk: movieActions.fetchOthersCartoonsAsync,
		url: requests.othersCartoons,
		title: "Other Cartoons",
		genre: "othersCartoons",
		selector: movieSelectors.selectOtherCartoonsMovies,
	},
];


export const fetchMovieDataConfig = [
	{
		id: 1,
		thunk: movieActions.fetchDramaAsync,
		url: requests.drama,
		title: "Drama",
		genre: "drama",
		selector: movieSelectors.selectDramaMovies,
	},
  {
		id: 2,
		thunk: movieActions.fetchRomanceAsync,
		url: requests.romance,
		title: "Romance",
		genre: "romance",
		selector: movieSelectors.selectRomanceMovies,
	},
	{
		id: 3,
		thunk: movieActions.fetchHorrorMoviesAsync,
		url: requests.fetchHorrorMovies,
		title: "Horror",
		genre: "horror",
		selector: movieSelectors.selectHorrorMovies,
	},
  {
		id: 4,
		thunk: movieActions.fetchComedyMoviesAsync,
		url: requests.fetchComedyMovies,
		title: "Comedy",
		genre: "comedy",
		selector: movieSelectors.selectComedyMovies,
	},
  {
		id: 6,
		thunk: movieActions.fetchCrimeAsync,
		url: requests.crime,
		title: "Crime",
		genre: "crime",
		selector: movieSelectors.selectCrimeMovies,
	},

  {
		id: 7,
		thunk: movieActions.fetchFantasyAsync,
		url: requests.fantasy,
		title: "Fantasy",
		genre: "fantasy",
		selector: movieSelectors.selectFantasyMovies,
	},
  {
		id: 8,
		thunk: movieActions.fetchScienceAsync,
		url: requests.science,
		title: "Science Fiction",
		genre: "science",
		selector: movieSelectors.selectScienceMovies,
	},
  {
		id: 9,
		thunk: movieActions.fetchWesternAsync,
		url: requests.western,
		title: "Western",
		genre: "western",
		selector: movieSelectors.selectWesternMovies,
	},
];

export const fetchPopularDataConfig = [
];

export const genresList = [
	{
		id: 28,
		name: "Action",
	},
	{
		id: 12,
		name: "Adventure",
	},
	{
		id: 16,
		name: "Animation",
	},
	{
		id: 35,
		name: "Comedy",
	},
	{
		id: 80,
		name: "Crime",
	},
	{
		id: 99,
		name: "Documentary",
	},
	{
		id: 18,
		name: "Drama",
	},
	{
		id: 10751,
		name: "Family",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 36,
		name: "History",
	},
	{
		id: 27,
		name: "Horror",
	},
	{
		id: 10402,
		name: "Music",
	},
	{
		id: 9648,
		name: "Mystery",
	},
	{
		id: 10749,
		name: "Romance",
	},
	{
		id: 878,
		name: "Science Fiction",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
	},
	{
		id: 10752,
		name: "War",
	},
	{
		id: 37,
		name: "Western",
	},
	{
		id: 10759,
		name: "Action & Adventure",
	},
	{
		id: 10762,
		name: "Kids",
	},
	{
		id: 10763,
		name: "News",
	},
	{
		id: 10764,
		name: "Reality",
	},
	{
		id: 10765,
		name: "Sci-Fi & Fantasy",
	},
	{
		id: 10766,
		name: "Soap",
	},
	{
		id: 10767,
		name: "Talk",
	},
	{
		id: 10768,
		name: "War & Politics",
	},
];