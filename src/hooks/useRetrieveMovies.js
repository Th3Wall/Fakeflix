import { useEffect } from "react"
import { useDispatch } from "react-redux"
import requests from "../requests"
import {
    fetchActionMoviesAsync,
    fetchAdventureMoviesAsync,
    fetchComedyMoviesAsync,
    fetchNetflixMoviesAsync,
    fetchAnimationMoviesAsync,
    fetchHorrorMoviesAsync,
    fetchRomanceMoviesAsync,
    fetchTopRatedMoviesAsync,
    fetchTrendingMoviesAsync,
    fetchUpcomingMoviesAsync
} from "../redux/movies/movies.actions"

const {
    fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchAdventureMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchAnimationMovies,
    fetchUpcomingMovies
} = requests

export const useRetrieveAllMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchActionMoviesAsync(fetchActionMovies))
        dispatch(fetchAdventureMoviesAsync(fetchAdventureMovies))
        dispatch(fetchComedyMoviesAsync(fetchComedyMovies))
        dispatch(fetchNetflixMoviesAsync(fetchNetflixOriginals))
        dispatch(fetchAnimationMoviesAsync(fetchAnimationMovies))
        dispatch(fetchHorrorMoviesAsync(fetchHorrorMovies))
        dispatch(fetchRomanceMoviesAsync(fetchRomanceMovies))
        dispatch(fetchTopRatedMoviesAsync(fetchTopRated))
        dispatch(fetchTrendingMoviesAsync(fetchTrending))
        dispatch(fetchUpcomingMoviesAsync(fetchUpcomingMovies))
    }, [dispatch])
}
