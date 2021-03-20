const API_KEY = "e8d53ad78d99a4722c3f0f0f6a5c9014";
const GITHUB_ASSETS_BASE_URL = "https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix";
export const LANG = "en-US";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/original";

export const LOGO_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_logo.png`;
export const PROFILE_PIC_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_profilepic.png`;
export const SIGNIN_BGIMG_URL = `${GITHUB_ASSETS_BASE_URL}/Fakeflix_signin_bg.jpg`;

const requests = {
	fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
    // Movies
	fetchTrendingMovies: `/trending/movies/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=${LANG}`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=${LANG}`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=${LANG}`,
	fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	discoverMovies: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
    // Series
	discoverSeries: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchTrendingSeries: `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=${LANG}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
	fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc&language=${LANG}`,
	fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
	fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
	fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc&language=${LANG}`,
	fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc&language=${LANG}`,
	fetchFamilySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc&language=${LANG}`,
	fetchKidsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc&language=${LANG}`,
	fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc&language=${LANG}`,
};

export default requests;
