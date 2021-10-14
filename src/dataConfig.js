import requests from "./requests";
import * as movieSelectors from "./redux/movies/movies.selectors";
import * as seriesSelectors from "./redux/series/series.selectors";
import {
	fetchComedyMoviesAsync,
	fetchHorrorMoviesAsync,
  fetchFeaturedMoviesAsync,
} from "./redux/movies/movies.actions";
import {
	fetchActionAdventureSeriesAsync,
	fetchAnimationSeriesAsync,
	fetchComedySeriesAsync,
	fetchCrimeSeriesAsync,
	fetchDocumentarySeriesAsync,
	fetchFamilySeriesAsync,
	fetchKidsSeriesAsync,
	fetchNetflixSeriesAsync,
	fetchSciFiFantasySeriesAsync,
	fetchTrendingSeriesAsync,
} from "./redux/series/series.actions";
const {
	fetchNetflixOriginals,
	fetchComedyMovies,
	fetchHorrorMovies,
	fetchActionAdventureSeries,
	fetchAnimationSeries,
	fetchComedySeries,
	fetchCrimeSeries,
	fetchDocumentarySeries,
	fetchFamilySeries,
	fetchKidsSeries,
	fetchSciFiFantasySeries,
	fetchTrendingSeries,
  fetchFeatureMovies,
} = requests;

export const fetchMovieDataConfig = [
	{
		id: 1,
		thunk: fetchComedyMoviesAsync,
		url: fetchComedyMovies,
		title: "Comedy",
		genre: "comedy",
		selector: movieSelectors.selectComedyMovies,
	},
  {
		id: 2,
		thunk: fetchFeaturedMoviesAsync,
		url: fetchFeatureMovies,
		title: "Timesless Classics",
		genre: "featured",
		selector: movieSelectors.selectFeaturedMovies,
	},
	{
		id: 3,
		thunk: fetchHorrorMoviesAsync,
		url: fetchHorrorMovies,
		title: "Horror",
		genre: "horror",
		selector: movieSelectors.selectHorrorMovies,
	},
];

export const fetchBannerDataConfig = [

];

export const fetchSeriesDataConfig = [
	{
		id: 0,
		thunk: fetchTrendingSeriesAsync,
		url: fetchTrendingSeries,
		title: "Trending Now",
		genre: "trending",
		selector: seriesSelectors.selectTrendingSeries,
	},
	{
		id: 1,
		thunk: fetchNetflixSeriesAsync,
		url: fetchNetflixOriginals,
		title: "Fakeflix Originals",
		genre: "fakeflix",
		selector: seriesSelectors.selectNetflixSeries,
		isLarge: true,
	},
	{
		id: 2,
		thunk: fetchActionAdventureSeriesAsync,
		url: fetchActionAdventureSeries,
		title: "Action & Adventure",
		genre: "actionadventure",
		selector: seriesSelectors.selectActionAdventureSeries,
	},
	{
		id: 3,
		thunk: fetchAnimationSeriesAsync,
		url: fetchAnimationSeries,
		title: "Animation",
		genre: "animation",
		selector: seriesSelectors.selectAnimationSeries,
	},
	{
		id: 4,
		thunk: fetchComedySeriesAsync,
		url: fetchComedySeries,
		title: "Comedy",
		genre: "comedy",
		selector: seriesSelectors.selectComedySeries,
	},
	{
		id: 5,
		thunk: fetchCrimeSeriesAsync,
		url: fetchCrimeSeries,
		title: "Crime",
		genre: "crime",
		selector: seriesSelectors.selectCrimeSeries,
	},
	{
		id: 6,
		thunk: fetchDocumentarySeriesAsync,
		url: fetchDocumentarySeries,
		title: "Documentary",
		genre: "documentary",
		selector: seriesSelectors.selectDocumentarySeries,
	},
	{
		id: 7,
		thunk: fetchFamilySeriesAsync,
		url: fetchFamilySeries,
		title: "Family",
		genre: "family",
		selector: seriesSelectors.selectFamilySeries,
	},
	{
		id: 8,
		thunk: fetchKidsSeriesAsync,
		url: fetchKidsSeries,
		title: "Kids",
		genre: "kids",
		selector: seriesSelectors.selectKidsSeries,
	},
	{
		id: 9,
		thunk: fetchSciFiFantasySeriesAsync,
		url: fetchSciFiFantasySeries,
		title: "Sci-Fi & Fantasy",
		genre: "scififantasy",
		selector: seriesSelectors.selectSciFiFantasySeries,
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