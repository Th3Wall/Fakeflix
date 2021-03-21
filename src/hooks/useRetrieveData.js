import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import requests from "../requests"
import * as movieSelectors from "../redux/movies/movies.selectors"
import * as seriesSelectors from "../redux/series/series.selectors"
import {
    fetchTrendingMoviesAsync,
    fetchNetflixMoviesAsync,
    fetchTopRatedMoviesAsync,
    fetchActionMoviesAsync,
    fetchAdventureMoviesAsync,
    fetchComedyMoviesAsync,
    fetchHorrorMoviesAsync,
    fetchRomanceMoviesAsync,
    fetchAnimationMoviesAsync,
    fetchUpcomingMoviesAsync,
    fetchLatestMoviesAsync
} from "../redux/movies/movies.actions"
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
    fetchTrendingSeriesAsync
} from "../redux/series/series.actions"

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
    fetchTrendingSeries
} = requests

const fetchData = {
    movies: [
        {
            id: 0,
            thunk: fetchTopRatedMoviesAsync,
            url: fetchTopRated,
            title: "Top Rated on Fakeflix",
            genre: "TopRated",
            selector: movieSelectors.selectTopRatedMovies
        },
        {
            id: 1,
            thunk: fetchTrendingMoviesAsync,
            url: fetchTrendingMovies,
            title: "Trending Now",
            genre: "Trending",
            selector: movieSelectors.selectTrendingMovies
        },
        {
            id: 2,
            thunk: fetchNetflixMoviesAsync,
            url: fetchNetflixOriginals,
            title: "Fakeflix Originals",
            genre: "Fakeflix",
            selector: movieSelectors.selectNetflixMovies,
            isLarge: true
        },
        {
            id: 3,
            thunk: fetchActionMoviesAsync,
            url: fetchActionMovies,
            title: "Action",
            genre: "Action",
            selector: movieSelectors.selectActionMovies
        },
        {
            id: 4,
            thunk: fetchAdventureMoviesAsync,
            url: fetchAdventureMovies,
            title: "Adventure",
            genre: "Adventure",
            selector: movieSelectors.selectAdventureMovies
        },
        {
            id: 5,
            thunk: fetchComedyMoviesAsync,
            url: fetchComedyMovies,
            title: "Comedy",
            genre: "Comedy",
            selector: movieSelectors.selectComedyMovies
        },
        {
            id: 6,
            thunk: fetchHorrorMoviesAsync,
            url: fetchHorrorMovies,
            title: "Horror",
            genre: "Horror",
            selector: movieSelectors.selectHorrorMovies
        },
        {
            id: 7,
            thunk: fetchRomanceMoviesAsync,
            url: fetchRomanceMovies,
            title: "Romance",
            genre: "Romance",
            selector: movieSelectors.selectRomanceMovies
        },
        {
            id: 8,
            thunk: fetchAnimationMoviesAsync,
            url: fetchAnimationMovies,
            title: "Animation",
            genre: "Animation",
            selector: movieSelectors.selectAnimationMovies
        },
        {
            id: 9,
            thunk: fetchUpcomingMoviesAsync,
            url: fetchUpcomingMovies,
            title: "Upcoming",
            genre: "Upcoming",
            selector: movieSelectors.selectUpcomingMovies
        }
    ],
    series: [
        {
            id: 0,
            thunk: fetchTrendingSeriesAsync,
            url: fetchTrendingSeries,
            title: "Trending Now",
            genre: "Trending",
            selector: seriesSelectors.selectTrendingSeries
        },
        {
            id: 1,
            thunk: fetchNetflixSeriesAsync,
            url: fetchNetflixOriginals,
            title: "Fakeflix Originals",
            genre: "Fakeflix",
            selector: seriesSelectors.selectNetflixSeries,
            isLarge: true
        },
        {
            id: 2,
            thunk: fetchActionAdventureSeriesAsync,
            url: fetchActionAdventureSeries,
            title: "Action & Adventure",
            genre: "ActionAdventure",
            selector: seriesSelectors.selectActionAdventureSeries
        },
        {
            id: 3,
            thunk: fetchAnimationSeriesAsync,
            url: fetchAnimationSeries,
            title: "Animation",
            genre: "Animation",
            selector: seriesSelectors.selectAnimationSeries
        },
        {
            id: 4,
            thunk: fetchComedySeriesAsync,
            url: fetchComedySeries,
            title: "Comedy",
            genre: "Comedy",
            selector: seriesSelectors.selectComedySeries
        },
        {
            id: 5,
            thunk: fetchCrimeSeriesAsync,
            url: fetchCrimeSeries,
            title: "Crime",
            genre: "Crime",
            selector: seriesSelectors.selectCrimeSeries
        },
        {
            id: 6,
            thunk: fetchDocumentarySeriesAsync,
            url: fetchDocumentarySeries,
            title: "Documentary",
            genre: "Documentary",
            selector: seriesSelectors.selectDocumentarySeries
        },
        {
            id: 7,
            thunk: fetchFamilySeriesAsync,
            url: fetchFamilySeries,
            title: "Family",
            genre: "Family",
            selector: seriesSelectors.selectFamilySeries
        },
        {
            id: 8,
            thunk: fetchKidsSeriesAsync,
            url: fetchKidsSeries,
            title: "Kids",
            genre: "Kids",
            selector: seriesSelectors.selectKidsSeries
        },
        {
            id: 9,
            thunk: fetchSciFiFantasySeriesAsync,
            url: fetchSciFiFantasySeries,
            title: "Sci-Fi & Fantasy",
            genre: "SciFiFantasy",
            selector: seriesSelectors.selectSciFiFantasySeries
        }
    ],
    popular: [
        {
            id: 0,
            thunk: fetchTopRatedMoviesAsync,
            url: fetchTopRated,
            title: "Top Rated in your country",
            genre: "TopRated",
            selector: movieSelectors.selectTopRatedMovies
        },
        {
            id: 1,
            thunk: fetchLatestMoviesAsync,
            url: fetchReleasedMoviesByOneMonth,
            title: "New on Fakeflix",
            genre: "NewIn",
            selector: movieSelectors.selectLatestMovies
        },
        {
            id: 2,
            thunk: fetchUpcomingMoviesAsync,
            url: fetchUpcomingMovies,
            title: "Upcoming",
            genre: "Upcoming",
            selector: movieSelectors.selectUpcomingMovies
        }
    ]
}

export const useRetrieveData = type => {

    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        switch (type) {
            case "movies":
                {
                    const rowsData = fetchData.movies.map(el => {
                        dispatch(el.thunk(el.url))
                        return {
                            id: el.id,
                            title: el.title,
                            genre: el.genre,
                            selector: el.selector,
                            isLarge: el.isLarge
                        }
                    })
                    setData(rowsData)
                }
                break
            case "series":
                {
                    const rowsData = fetchData.series.map(el => {
                        dispatch(el.thunk(el.url))
                        return {
                            id: el.id,
                            title: el.title,
                            genre: el.genre,
                            selector: el.selector,
                            isLarge: el.isLarge
                        }
                    })
                    setData(rowsData)
                }
                break
            case "popular":
                {
                    const rowsData = fetchData.popular.map(el => {
                        dispatch(el.thunk(el.url))
                        return {
                            id: el.id,
                            title: el.title,
                            genre: el.genre,
                            selector: el.selector,
                            isLarge: el.isLarge
                        }
                    })
                    setData(rowsData)
                }
                break
            default:
                console.log("wrong type")
        }
    }, [type, dispatch])

    return data
}
