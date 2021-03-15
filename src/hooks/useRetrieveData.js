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
    fetchUpcomingMoviesAsync
} from "../redux/movies/movies.actions"
import {
    fetchNetflixSeriesAsync
} from "../redux/series/series.actions"

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
            url: fetchTrending,
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
            id: 1,
            thunk: fetchNetflixSeriesAsync,
            url: fetchNetflixOriginals,
            title: "Fakeflix Originals",
            genre: "Fakeflix",
            selector: seriesSelectors.selectNetflixSeries,
            isLarge: true
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
            default:
                console.log("wrong type")
        }
    }, [type, dispatch])

    return data
}
