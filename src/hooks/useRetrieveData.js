import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchSeriesDataConfig } from "../dataConfig";

export const useRetrieveData = type => {

    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        switch (type) {
            case "movies":
                {
                    const rowsData = fetchMovieDataConfig.map(el => {
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
                    const rowsData = fetchSeriesDataConfig.map(el => {
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
                    const rowsData = fetchPopularDataConfig.map(el => {
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
