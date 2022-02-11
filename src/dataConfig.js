import requests from "./requests";
import * as movieSelectors from "./redux/movies/movies.selectors";
import * as seriesSelectors from "./redux/series/series.selectors";
import {
	fetchActionMoviesAsync,
	fetchAdventureMoviesAsync,
	fetchAnimationMoviesAsync,
	fetchComedyMoviesAsync,
	fetchHorrorMoviesAsync,
	fetchLatestMoviesAsync,
	fetchNetflixMoviesAsync,
	fetchRomanceMoviesAsync,
	fetchTopRatedMoviesAsync,
	fetchTrendingMoviesAsync,
	fetchUpcomingMoviesAsync,
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
	fetchReleasedMoviesByOneMonth,
	fetchTrendingMovies,
	fetchNetflixOriginals,
	fetchTopRated,
	fetchActionMovies,
	fetchAdventureMovies,
	fetchComedyMovies,
	fetchHorrorMovies,
	fetchRomanceMovies,
	fetchAnimationMovies,
	fetchUpcomingMovies,
	fetchActionAdventureSeries,
	fetchAnimationSeries,
	fetchComedySeries,
	fetchCrimeSeries,
	fetchDocumentarySeries,
	fetchFamilySeries,
	fetchKidsSeries,
	fetchSciFiFantasySeries,
	fetchTrendingSeries,
} = requests;

export const fetchMovieDataConfig = [
	{
		id: 0,
		thunk: fetchTrendingMoviesAsync,
		url: fetchTrendingMovies,
		title: "Trending Now",
		genre: "trending",
		selector: movieSelectors.selectTrendingMovies,
	},
	{
		id: 1,
		thunk: fetchTopRatedMoviesAsync,
		url: fetchTopRated,
		title: "Top Rated on Fakeflix",
		genre: "toprated",
		selector: movieSelectors.selectTopRatedMovies,
	},
	{
		id: 2,
		thunk: fetchNetflixMoviesAsync,
		url: fetchNetflixOriginals,
		title: "Fakeflix Originals",
		genre: "fakeflix",
		selector: movieSelectors.selectNetflixMovies,
		isLarge: true,
	},
	{
		id: 3,
		thunk: fetchActionMoviesAsync,
		url: fetchActionMovies,
		title: "Action",
		genre: "action",
		selector: movieSelectors.selectActionMovies,
	},
	{
		id: 4,
		thunk: fetchAdventureMoviesAsync,
		url: fetchAdventureMovies,
		title: "Adventure",
		genre: "adventure",
		selector: movieSelectors.selectAdventureMovies,
	},
	{
		id: 5,
		thunk: fetchComedyMoviesAsync,
		url: fetchComedyMovies,
		title: "Comedy",
		genre: "comedy",
		selector: movieSelectors.selectComedyMovies,
	},
	{
		id: 6,
		thunk: fetchHorrorMoviesAsync,
		url: fetchHorrorMovies,
		title: "Horror",
		genre: "horror",
		selector: movieSelectors.selectHorrorMovies,
	},
	{
		id: 7,
		thunk: fetchRomanceMoviesAsync,
		url: fetchRomanceMovies,
		title: "Romance",
		genre: "romance",
		selector: movieSelectors.selectRomanceMovies,
	},
	{
		id: 8,
		thunk: fetchAnimationMoviesAsync,
		url: fetchAnimationMovies,
		title: "Animation",
		genre: "animation",
		selector: movieSelectors.selectAnimationMovies,
	},
	{
		id: 9,
		thunk: fetchUpcomingMoviesAsync,
		url: fetchUpcomingMovies,
		title: "Upcoming",
		genre: "upcoming",
		selector: movieSelectors.selectUpcomingMovies,
	},
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
	{
		id: 0,
		thunk: fetchTopRatedMoviesAsync,
		url: fetchTopRated,
		title: "Top Rated in your country",
		genre: "toprated",
		selector: movieSelectors.selectTopRatedMovies,
	},
	{
		id: 1,
		thunk: fetchLatestMoviesAsync,
		url: fetchReleasedMoviesByOneMonth,
		title: "New on Fakeflix",
		genre: "newin",
		selector: movieSelectors.selectLatestMovies,
	},
	{
		id: 2,
		thunk: fetchUpcomingMoviesAsync,
		url: fetchUpcomingMovies,
		title: "Upcoming",
		genre: "upcoming",
		selector: movieSelectors.selectUpcomingMovies,
	},
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