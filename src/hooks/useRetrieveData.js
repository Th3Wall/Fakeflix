import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchSeriesDataConfig } from "../dataConfig";

export const useRetrieveData = (type) => {

    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        let selectedConfigArray = null;
        switch (type) {
            case "movies":
                selectedConfigArray = fetchMovieDataConfig;
                break;
            case "series":
                selectedConfigArray = fetchSeriesDataConfig;
                break;
            case "popular":
                selectedConfigArray = fetchPopularDataConfig;
                break;
            default:
                break;
        }

        let isPage = true;
        const rowsData = selectedConfigArray.map(el => {
            dispatch(el.thunk(el.url, isPage))
            return {
                id: el.id,
                title: el.title,
                genre: el.genre,
                selector: el.selector,
                isLarge: el.isLarge
            }
        })
        setData(rowsData)

    }, [type, dispatch])

    return data
}
