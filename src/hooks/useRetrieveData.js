import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchMovieDataConfig, fetchPopularDataConfig, fetchCartoonsDataConfig, fetchHomeDataConfig } from "../dataConfig";

export const useRetrieveData = (type) => {

    const dispatch = useDispatch()
    const [data, setData] = useState(null)

    useEffect(() => {
        let selectedConfigArray = null;
        switch (type) {
            case "browse":
                selectedConfigArray = fetchHomeDataConfig;
                break;
            case "cartoons":
                selectedConfigArray = fetchCartoonsDataConfig;
                break;
            case "movies":
                selectedConfigArray = fetchMovieDataConfig;
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
