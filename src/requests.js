const API_KEY = "e8d53ad78d99a4722c3f0f0f6a5c9014"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests
