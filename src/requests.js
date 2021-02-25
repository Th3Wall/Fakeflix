const API_KEY = "e8d53ad78d99a4722c3f0f0f6a5c9014"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&sort_by=popularity.desc&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc&language=en-US`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc&language=en-US`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc&language=en-US`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc&language=en-US`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc&language=en-US`,
}

export default requests
